import React,{useState} from 'react';
import './followingFollowers.css';
import defaultProfile from '../../img/deefault.jpg';

export default function FollwingFollowers(props){
    return(
        <div className="flwAndFlowing">
            <div className="picAndSelect">
                <div className="imgg"></div>
                <div className="listAndTitle">
                    <h3>People you follow</h3>
                    <ul className="NavbarAndheaderul">
                        <li><a>photos from</a></li>
                        <li><a>photos of</a></li>
                        <li><a>list</a></li>
                    </ul>
                </div>
            </div>
            <div className="searchFeatures">
                <span>show :</span>
                <select id="sortForm" className="form-select" aria-label="Default select example">
                <option defaultValue>everyone</option>
                <option value="1">Following</option>
                <option value="2">Freinds</option>
                <option value="3">Family</option>
                <option value="4">Freinds and Family</option>
                </select>
                <p>or</p>
                <span>Search :</span>
                <input id="searchForm" className="form-control form-control-sml" type="text" placeholder="screen name,real name or email" aria-label=".form-control-sm example"></input>
                <p>or</p>
                <a>who is following you?</a>
            </div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">public Photos</th>
                <th scope="col">Last Upload</th>
                <th scope="col">You list them as</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><img src={defaultProfile}></img> {props.Fname} {props.Lname}</th>
                <td>{props.num_photos}</td>
                <td>Otto</td>
                <td>Following(<a>Edit</a>)</td>
                </tr>
                <tr>
                <th scope="row"><img src={defaultProfile}></img> {props.Fname} {props.Lname}</th>
                <td>{props.num_photos}</td>
                <td>Otto</td>
                <td>Following(<a>Edit</a>)</td>
                </tr>
                <tr>
                <th scope="row"><img src={defaultProfile}></img> {props.Fname} {props.Lname}</th>
                <td>{props.num_photos}</td>
                <td>Otto</td>
                <td>Following(<a>Edit</a>)</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}