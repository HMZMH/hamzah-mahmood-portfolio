import '../styles/EducationContent.css'
import collegelogo from '../images/Londoncollege_Logo.png';
import universitylogo from '../images/Bruneluniversity_Logo.jpg';
import CollegeGrades from '../images/College_Grades.png';
import UniversityGrades from '../images/University_Grades.png';

function EducationContent(){
return(
<div className='Education-Content'>

    <div className='Education-Box'>

        <h3 className='Box-Header'>Access to HE - Computing</h3>

        <table>
        <tr>
            <th>Module</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>Finding & Reading Information</td>
            <td>Achieved</td>
        </tr>
        <tr>
            <td>Arithmetic Skills</td>
            <td>Achieved</td>
        </tr>
        <tr>
            <td>Examination Skills</td>
            <td>Achieved</td>
        </tr>
        <tr>
            <td>Mathematical Investigation</td>
            <td>Achieved</td>
        </tr>
        <tr>
            <td>Writing & Delivering Seminar Papers</td>
            <td>Achieved</td>
        </tr>
        <tr>
            <td>Extended Project</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Computer Hardware</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Data Representation</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Image Manipulation Fundamentals</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Operating Systems & System Management</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Practical Relational Database Development</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Spreadsheets & Charts</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>System Analysis</td>
            <td>Distinction</td>
        </tr>
        <tr>
            <td>Programming Fundamentals</td>
            <td>Merit</td>
        </tr>
        <tr>
            <td>Matrices & Transformations</td>
            <td>Merit</td>
        </tr>
        <tr>
            <td>Algebra</td>
            <td>Pass*</td>
        </tr>
        <tr>
            <td>Mathematics for Computing</td>
            <td>Pass*</td>
        </tr>
        <br/>
        <tr>
        <p1>*Awarded automatically due to a national lockdown</p1>
        </tr>
        </table>

        <img src={CollegeGrades} alt='CollegeGrades' className='Grade-Chart'/>

    </div>

    <br/>

    <div className='Education-Box'>

        <h3 className='Box-Header'>BSc Hons Computer Science (Software Engineering)</h3>

        <table>
        <tr>
            <th>Module</th>
            <th>Grade</th>
        </tr>
        <tr>
            <p1>Year 1</p1>
        </tr>
        <tr>
            <td>Group Project Reflection</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Software Design</td>
            <td>A-</td>
        </tr>
        <tr>
            <td>Software Implementation</td>
            <td>B+</td>
        </tr>
        <tr>
            <td>Logic & Computation</td>
            <td>B</td>
        </tr>
        <tr>
            <td>Information Systems & Organisations</td>
            <td>B-</td>
        </tr>
        <tr>
            <td>Data & Information</td>
            <td>C</td>
        </tr>
        <tr>
            <td>Fundamental Programming</td>
            <td>D</td>
        </tr>
        <tr>
            <p1>Year 2</p1>
        </tr>
        <tr>
            <td>Networks & Operating Systems</td>
            <td>A-</td>
        </tr>
        <tr>
            <td>Algorithms & their Applications</td>
            <td>A-</td>
        </tr>
        <tr>
            <td>Usability Engineering</td>
            <td>A-</td>
        </tr>
        <tr>
            <td>Software Development & Management</td>
            <td>B</td>
        </tr>
        <tr>
            <td>Group Project</td>
            <td>B</td>
        </tr>
        <tr>
            <p1>Year 3</p1>
        </tr>
        <tr>
            <td>Advanced Topics in Computer Science</td>
            <td>A-</td>
        </tr>
        <tr>
            <td>Software Engineering</td>
            <td>B-</td>
        </tr>
        <tr>
            <td>Human-Computer Interaction</td>
            <td>A-</td>
        </tr>
        <tr>
            <td>Computer Science Project</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Software Project Management</td>
            <td>B+</td>
        </tr>
        </table>

        <img src={UniversityGrades} alt='UniversityGrades' className='Grade-Chart'/>

    </div>

</div>
);
}

export default EducationContent;