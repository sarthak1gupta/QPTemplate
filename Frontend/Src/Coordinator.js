import React from 'react'
import { Link } from "react-router-dom"; 
import './coordinator.css'

export const Coordinator = () => {
  return (
    <body>
    <div className='container'>
    <div class="main"></div>
    <select id ="temp" name="temp">
        <option value="create">QP template create</option>
        <option value="enter">QP marks enter</option>
    </select>
    <div ><Link to={'/'}><button className='logout'>Logout</button></Link></div>
    <h3>Institute Name : R V College of Engineering</h3>
    <form action="NAME.DD">
      <div>Academic year: <input type="number" name="acad" /></div>
      <div>
        <label for="sub">Subject:</label>
        <select id="sub" name="sub">
          <option value="math">Mathematics</option>
          <option value="phy">Physics</option>
          <option value="che">Chemistry</option>
          <option value="dsa">Data Structures and Algorithms</option>
          <option value="prog">Programming in C</option>
        </select>
      </div>

      <div>
        <label for="sem">Semester:</label>
        <select id="sem" name="sem">
          <option value="s1">UG Odd 1Y</option>
          <option value="s2">UG Even 1Y</option>
          <option value="s3">UG Odd 2Y</option>
          <option value="s4">UG Even 2Y</option>
          <option value="s5">UG Odd 3Y</option>
          <option value="s6">UG Even 3Y</option>
          <option value="s7">UG Odd 4Y</option>
          <option value="s8">UG Even 4Y</option>
        </select>
      </div>
      <div>
        <label for="dept">Department:</label>
        <select id="dept" name="dept">
          <option value="sel">Select dept</option>
          <option value="cse">Computer Science and Engineering</option>
          <option value="ise">Information Science and Engineering</option>
          <option value="cy">Computer Science(Cyber security)</option>
          <option value="cd">Computer Science(Data Science)</option>
          <option value="ece">Electronics and communications engineering</option>
          <option value="aiml">Artificial Intelligence and machine learning</option>
          <option value="mech">Mechanical Engineering</option>
          <option value="cv">Civil Engineering</option>
        </select>
      </div>
      <div>Subject code:
        <select id="subc" name="subc">
          <option value="sel">Select code</option>
          <option value="ma">22ma12</option>
          <option value="ch">22ch12</option>
          <option value="eng">22hse98</option>
          <option value="cprog">22pc12</option>
      </select>
      </div>
      <div>Exam type:
        <select id="ext" name="ext">
          <option value="sel">Select exam</option>
          <option value="Reg">Regular</option>
          <option value="fastt">Fast track</option>
          <option value="suppl">Supplementary</option>
          <option value="makeup">Make up exam</option>
      </select>
      </div>

      <hr />
      <h4>Selection Screen</h4>
      <div>
        <div class="me">
          <label>Create Template</label>
          <input type="radio" name="opt" value="temp" />
        </div>
        <div class="me">
          <label>
            Enter Max Marks
          </label>
          <input type="radio" name="opt" value="max" />
        </div>
        <div class="me">
          <label>
            
            Display
          </label>
          <input type="radio" name="opt" value="dis" />
        </div>
        <div class="me">
          <label>
            
            Upload Scheme
          </label>
          <input type="radio" name="opt" value="sch" />
        </div>
      </div>
    </form>
    <Link to="/home"><button type="button" className='buttonc'>Submit</button></Link>
    </div>
  </body>
  )
}