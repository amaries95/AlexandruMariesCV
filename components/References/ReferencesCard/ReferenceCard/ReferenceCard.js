import style from './ReferenceCard.module.css';
import {RiDeleteBin6Line as Bin} from "react-icons/ri";
import { BsEye as Visible} from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { referenceActions } from './../../../Store/reference';
import {BsEyeSlash as NotVisible} from "react-icons/bs";

export default function ReferenceCard(props){
    var currentReferenceVar = {
        id: props.id,
        summary: props.summary,
        author: props.author,
        jobTitleAuthor: props.jobTitleAuthor,
        isVisible: props.isVisible
    };
    const isAdmin = useSelector(state => state.login.isAuth);
    var allReferences = useSelector(state => state.reference.referenceList);
    const baseUrl = useSelector(state => state.routes.baseUrl);
    const deleteAReference = useSelector(state => state.routes.deleteReference);
    const updateReferenceVisibility = useSelector(state => state.routes.updateReferenceVisibility);
    const token = useSelector(state => state.login.token);
    const referenceDispatch = useDispatch();

    const [currentReference, setCurrentReference] = useState(currentReferenceVar);

    const onDeleteReferenceHandler = (event) => {
        if(token != '')
        {
            deleteReference(currentReferenceVar.id);
        }
    }

    const deleteReference = useCallback(async () => {
        const response = await fetch(`${baseUrl}${deleteAReference}/${currentReference.id}`, {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            RemoveReferenceFromStore(currentReference.id);
    })

    function RemoveReferenceFromStore(referenceId){
        var referencesAfterRemoving = allReferences.filter(ref => ref.id != referenceId);
        referenceDispatch(referenceActions.saveReferences([...referencesAfterRemoving]));
    }

    const onChangeVisibilityHandler = (event) => {
        if(token != '')
        {
            changeVisibility();
        }
    }

    const changeVisibility = useCallback(async () => {
        currentReferenceVar.isVisible = currentReference.isVisible == true ? false : true;
        setCurrentReference(currentReferenceVar);
        var x = currentReferenceVar;
        var y = currentReference;
        const response = await fetch(baseUrl + updateReferenceVisibility, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(currentReferenceVar)
        });
    });

    return (
        <div className={style['reference-card']}>
            <div className={style['reference-container']}>
                <p className={style.reference}>{currentReference.summary}</p>
            </div>
            <div className={style['author-container']}>
                <p>~ {currentReference.author} ({currentReference.jobTitleAuthor})</p>
            </div>
            {isAdmin && 
            <div className={style['controls-admin']}>
                <Bin className={style['control-admin']} onClick={onDeleteReferenceHandler} values={["dsa"]}></Bin>
                {currentReference.isVisible && <Visible className={style['control-admin']} onClick={onChangeVisibilityHandler}></Visible>}
                {!currentReference.isVisible && <NotVisible className={style['control-admin']} onClick={onChangeVisibilityHandler}></NotVisible>}
            </div>}
        </div>
    )

}