import { product, loggedInUser} from "../data";
import "../index.css"
import "../App.css"
// import { Formik } from "formik";

export const Reviews = (props) =>{
    return(
        <>
        <form action="" onSubmit={props.handleSubmit}>
            <div className={props.showReview ? 'review-side': 'reviewside-delete'}>
                <div className='review-div'>
                <div className='review-process'>
                    <h3 className='review-heading1'>Add your review</h3>
                    <h4 className='review-heading2'>headline</h4>
                    <input type="text" className='headline' name="headline" value={props.headline2} onChange={props.handleChange}/> 
                    <h3 className='review-heading3'>written review</h3>
                    <input type="text" className='written-text' name='writtenReview' value={props.writtenReview2} onChange={props.handleChange}/>
                    <div className='review-buttons'>
                    <button className='review-cancel' type='button' onClick={props.CancelFunction}>Cancel</button>
                    <button className='review-save' type="submit">Save</button>
                    </div>
                </div>
                </div>
            </div>
        </form>

        <div className={props.showComment ? 'comment' : 'no-comment'}>
            <div className='commentReview'>
            <div className="commentFirstRow">
                <h3>{props.user}</h3>
                {props.user === loggedInUser.name ? <button className='edit-button' onClick={() => {
                props.setshowComment(false)
                props.setshowReview(true)
                }}>Add</button> : null}
            </div>
            <h3 className="Reviewheadline-box">{props.headline}</h3>
            <p>{props.writtenReview}</p>
            </div>
      </div> 
        </>
    )
}