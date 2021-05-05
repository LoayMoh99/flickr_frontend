import React from "react"
import './styles.css';
export default function Sub_Nav()
{
    return (
        <div>
          <div class="nav-bar">
        <div class="sub-navbar">
          <ul class="nav">
            <li class="explore">
              <a href="#top"> <span>Explore</span></a>
            </li>
            <li class="trending">
              <a href="https://www.flickr.com/photos/tags">
                <span>Trending</span></a
              >
            </li>
            
          </ul>
        </div>
      </div>
      <div id="under-root"></div>
        </div>
    );
}