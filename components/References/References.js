import { useCallback, useEffect, useState } from 'react';
import { useReducer, useSelector, useDispatch } from 'react-redux';
import AddReference from './AddReference/AddReference';
import ReferenceForm from './ReferenceForm/ReferenceFrom';
import style from './References.module.css';
import ReferencesCard from './ReferencesCard/ReferencesCard';
import {referenceActions} from "./../Store/reference";


export default function References(props)
{
    const referencesStore = useSelector(state => state.reference.referenceList);
    const isFormVisible = useSelector(state => state.reference.isFormVisible);
    const [isLoading, setIsLoading] = useState(false);
    const [numberOfWebsiteVisits, setNumberOfWebsiteVisits] = useState('');
    const isLogin = useSelector(state => state.login.isAuth);
    const token = useSelector(state => state.login.token);
    const baseUrl = useSelector(state => state.routes.baseUrl);
    const getAllReferences = useSelector(state => state.routes.getAllReferences);
    const getVisibleReferences = useSelector(state => state.routes.getVisibleReferences);
    const getViews = useSelector(state => state.routes.getViews);
    const referencesDispatch = useDispatch();

    const noReferenceYetCard = [{
        id: "0",
        summary: "No references yet. Be the first one who adds a reference for Alex. 🙂",
        author: "Server Response",
        jobTitleAuthor: "Azure Database"
    }];
    
    const loadingReferenceCard = [{
        id: "1",
        summary: "Reading all references from the server...",
        author: "Frontend App",
        jobTitleAuthor: "React"
    }];

    const getReferences = useCallback(async () => {
        setIsLoading(true);
        
        let response = null
        if(isLogin)
        {
            response = await fetch(baseUrl + getAllReferences,{
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
        }
        else {
            response = await fetch(baseUrl + getVisibleReferences);
        }

        const data = await response.json();

        referencesDispatch(referenceActions.saveReferences([...data]));
        setIsLoading(false);
    }, []);

    const getNumberOfWebsiteVisits = useCallback(async () => {
        if(isLogin)
        {
            const response = await fetch(baseUrl + getViews, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();

            setNumberOfWebsiteVisits(data.numberOfViews);
        }
    });

    useEffect(() => {
        getReferences();
        getNumberOfWebsiteVisits();
     }, 
    [getReferences]);

    return (
        <div className={style.container}>
            <h3>References</h3>
            {isLogin && <label>Admin Mode: {numberOfWebsiteVisits} views</label>}
            {isLoading && <ReferencesCard referencesProp={loadingReferenceCard}></ReferencesCard>}
            {!isLoading && referencesStore.length === 0 && <ReferencesCard referencesProp={noReferenceYetCard}></ReferencesCard>}
            {!isLoading && <ReferencesCard referencesProp={referencesStore}/>}
            {isFormVisible && <ReferenceForm></ReferenceForm>}
            {!isFormVisible && <AddReference></AddReference>}
        </div>
    );
}