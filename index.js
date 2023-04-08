const enrolledstu=document.querySelector(".record");
const stulist=[];
const generateStudent=(details)=>{
    enrolledstu.insertAdjacentHTML(
        "afterbegin",
        `<div class="student-card">
        <h3>
           <em>${details.name}</em>
        </h3>
        <h3>
           <em>${details.email}</em>
        </h3>
        <h3>
           <em>${details.rollno}</em>
        </h3>
        <h3>
           <em>${details.gender}</em>
        </h3>
        <h3>
           <em>${details.skills}</em>
        </h3>
        </div>`
    );
}
const stuadded=(e)=>{
    e.preventDefault();
    const details={
        id:`${Date.now()}`,
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        rollno:document.getElementById("rollno").value,
        gender:document.querySelector("input[name='gender']:checked").value,
        skills:document.querySelector("input[name='skills']:checked").value,
    };
    generateStudent(details);
    stulist.push(details);
    localStorage.setItem("stulist",JSON.stringify(stulist));
};
let submit=document.getElementById("submit");
submit.addEventListener("click",stuadded);