import React,{useState} from 'react'

/** Renders PhotosToAdd component
 * @author Samar Nabil
 * @namespace PhotosToAdd
 * @category Functional Component
 * @extends Component 
 * @property {String} props.id -Photo id
 * @property {String} props.url -Photo url 
 * @property {Number} props.size -Array size of photo to add
 * @property {function} addPhoto -Append photo to array of selection
 * @property {function} removePhoto -De-Append photo to array of selection
 * @property {function} errorMessage -Alert when reaching max number of selections (6)
 */
function PhotosToAdd(props){

    // const [count,setCount] = useState(0);
    const [isHovered,setHover] = useState(false);
    const [isClicked,setClicked] = useState(false);

    function toggleHover(){
        setHover(!isHovered);
    }

    /** Highlight/unhighlight selected photos and delete/append based on state
    * @memberof PhotosToAdd
    * @method toggleClick
    */
    function toggleClick(){
        console.log('count=',props.size);
        if (isClicked === false){
            if (props.size < 6){
                props.onAdd(props.id,props.url);
                setClicked(!isClicked);
            }
            else{
                setClicked(false);
                props.onError();
            }
        }
        else{
            //remove from array 
            props.onRemove(props.id,props.url);
            setClicked(!isClicked);
        }
    }

    return(
        <>
        {!isClicked?
            <>
            {!isHovered?
            <img src={props.url}
                onMouseOver = {toggleHover}
                onMouseOut = {toggleHover}
                onClick ={toggleClick}
                alt=""
            />
            :
            <img src={props.url} style={{borderColor: '#ff0084'}}
                onMouseOver = {toggleHover}
                onMouseOut = {toggleHover}
                onClick ={toggleClick}
                alt=""
            />}
            </>
            :
            <>
            <img src={props.url} style={{borderColor: '#ff0084'}}
                onClick ={toggleClick}
                alt="" />
            </>}
        </>
    )
}

export default PhotosToAdd;