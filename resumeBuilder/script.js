

document.querySelector('#resume').style.display = 'none';

document.getElementById('btn').addEventListener('click', function (e) {

    e.preventDefault();

    var ipFields = document.querySelectorAll('.input-fields');
    let flag = true;
    ipFields.forEach(function (ele) {
        if (ele.hasAttribute('required') && ele.value.trim() === '') {
            flag = false;
        }
    });

    if (flag) {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('#resume').style.display = 'block';
        window.scrollTo(0, 0); // values are x,y-offset
        generateResume();
    } else {
        alert("Fill all required fields");
        window.scrollTo(0, 0);
    }

    function generateResume() {
        // Get form values
        let fullName = document.getElementById('addFullName').value;
        let email = document.getElementById('addEmail').value;
        let phone = document.getElementById('addPhone').value;
        let github = document.getElementById('addGithub').value;
        let linkedin = document.getElementById('addLinkedIn').value;
        let description = document.getElementById('addDesc').value;
        // const summary = document.getElementById('summary').value;
        // const skills = document.getElementById("skills").value.split(",");

        // Update resume output
        document.getElementById('name').textContent = fullName;
        document.getElementById('email').textContent = 'Email: ' + email;
        document.getElementById('phone').textContent = 'Phone: ' + phone;
        document.getElementById('desc').textContent = description;
        if (github !== '') {
            document.getElementById('github').textContent = 'Github: ' + github;
        }
        if (linkedin !== '') {
            document.getElementById('linkedin').textContent = 'Linkedin: ' + linkedin;
        }



        //Display skills
        var skillsInput = document.getElementById('addSkills').value;
        var skillsArray = skillsInput.split(',')
        var skillsList = document.getElementById('skillsList');
        skillsList.innerHTML = '';

        skillsArray.forEach(function (skill) {
            var listItem = document.createElement('li');
            listItem.textContent = skill.trim();
            skillsList.appendChild(listItem);
        });

        //Display interests
        var interestInput = document.getElementById('addInterests').value;
        var interestsArray = interestInput.split(',');
        var interestList = document.getElementById('interestList');
        interestList.innerHTML = '';

        interestsArray.forEach(function (interests) {
            var listItem = document.createElement('li');
            listItem.textContent = interests.trim();
            interestList.appendChild(listItem);
        });

        // //Display achievements
        var achievementInput = document.getElementById('addAchievements').value;
        var achievementsArray = achievementInput.split(',');
        var achievementList = document.getElementById('achievementList');
        achievementList.innerHTML = '';
        achievementsArray.forEach(function (achievements) {
            var listItem = document.createElement('li');
            listItem.textContent = achievements.trim();
            achievementList.appendChild(listItem);
        })
        //Display Education
        education();

        //Display Projects
        projects();
    };





});

//Render Education details
function education() {
    let degrees = document.querySelectorAll('.degreename');
    let clgs = document.querySelectorAll('.clgname');
    let cgpa = document.querySelectorAll('.cgpa');
    let fromDate = document.querySelectorAll('.fromDate');
    let toDate = document.querySelectorAll('.toDate');

    for (let i = 0; i < degrees.length; i++) {

        var createLi1 = document.createElement('li');
        createLi1.setAttribute('class', 'degItems');
        createLi1.textContent = degrees[i].value;


        var createLi2 = document.createElement('li');
        createLi2.setAttribute('class', 'clgItems')
        createLi2.textContent = clgs[i].value;

        var createLi3 = document.createElement('li');
        createLi3.setAttribute('class', 'cgpaItems')
        createLi3.textContent = cgpa[i].value + ' CGPA';

        var createLi4 = document.createElement('li');
        createLi4.setAttribute('class', 'dates')
        createLi4.textContent = fromDate[i].value + " - " + toDate[i].value;

        document.getElementById("educationField").appendChild(createLi1);
        document.getElementById("educationField").appendChild(createLi4);
        document.getElementById("educationField").appendChild(createLi2);


        if (cgpa[i].value !== '') {
            document.getElementById("educationField").appendChild(createLi3);
        }
        // document.querySelector(".degItems").required = true;
        // document.querySelector(".clgItems").required = true;

    }
}

//Render Projects
function projects() {
    let projects = document.querySelectorAll('.projectname');
    let description = document.querySelectorAll('.projectdesc');
    for (let i = 0; i < projects.length; i++) {
        var createLi1 = document.createElement('li');
        createLi1.setAttribute('class', 'nameItems');
        createLi1.textContent = projects[i].value;



        var createLi2 = document.createElement('li');
        createLi2.setAttribute('class', 'descItems')
        createLi2.textContent = description[i].value;

        document.getElementById("projectField").appendChild(createLi1);
        document.getElementById("projectField").appendChild(createLi2);
        // document.querySelector(".degItems").required = true;
        // document.querySelector(".clgItems").required = true;

    }
}

//Add Education
document.getElementById('addFieldsBtn2').addEventListener('click', function (e) {
    e.preventDefault();
    var inputFieldsContainer = document.getElementById('inputFieldsContainer');
    // event.preventDefault();

    // Create degree input field
    var inputField1 = document.createElement('input');
    inputField1.setAttribute('type', 'text');
    inputField1.setAttribute('class', 'form-control input-fields mt-2 degreename');
    inputField1.setAttribute('placeholder', 'Course');
    inputField1.setAttribute('required', '');

    // Create clg name input field
    var inputField2 = document.createElement('input');
    inputField2.setAttribute('type', 'text');
    inputField2.setAttribute('class', 'form-control input-fields mt-2 clgname');
    inputField2.setAttribute('placeholder', 'College/Institue name');
    inputField2.setAttribute('required', '');

    // Create CGPA input field
    var inputField3 = document.createElement('input');
    inputField3.setAttribute('type', 'text');
    inputField3.setAttribute('class', 'form-control input-fields mt-2 cgpa');
    inputField3.setAttribute('placeholder', 'CGPA');

    // Create from date input field
    var inputField4 = document.createElement('input');
    inputField4.setAttribute('type', 'month');
    inputField4.setAttribute('class', 'form-control input-fields mt-2 fromDate');
    inputField4.setAttribute('placeholder', 'From');
    inputField4.setAttribute('required', '');

    // Create To date input field
    var inputField5 = document.createElement('input');
    inputField5.setAttribute('type', 'date');
    inputField5.setAttribute('class', 'form-control input-fields mt-2 toDate');
    inputField5.setAttribute('placeholder', 'To');
    inputField5.setAttribute('required', '');

    // Append input fields to the container
    inputFieldsContainer.appendChild(inputField1);
    inputFieldsContainer.appendChild(inputField2);
    inputFieldsContainer.appendChild(inputField3);
    inputFieldsContainer.appendChild(inputField4);
    inputFieldsContainer.appendChild(inputField5);
});

//Add Projects
document.getElementById('addFieldsBtn1').addEventListener('click', function (e) {
    e.preventDefault();
    var inputFieldsContainer = document.getElementById('inputFieldsContainer1');
    // event.preventDefault();
    // Create first input field
    var inputField1 = document.createElement('input');
    inputField1.setAttribute('type', 'text');
    inputField1.setAttribute('class', 'form-control input-fields mt-2 projectname');
    inputField1.setAttribute('placeholder', 'Name');
    inputField1.setAttribute('required', '');

    // Create second input field
    var inputField2 = document.createElement('input');
    inputField2.setAttribute('type', 'text');
    inputField2.setAttribute('class', 'form-control input-fields mt-2 projectdesc');
    inputField2.setAttribute('placeholder', 'Description');
    inputField2.setAttribute('required', '');

    // Append input fields to the container
    inputFieldsContainer.appendChild(inputField1);
    inputFieldsContainer.appendChild(inputField2);
});

//Back Button
document.getElementById('back').addEventListener('click', function () {
    document.querySelector('#resume').style.display = 'none';
    document.querySelector('.form').style.display = 'block';
    window.scrollTo(0, 0); // values are x,y-offset
    location.reload();
});

//Print Button
document.getElementById('print').addEventListener('click', function () {
    printResume();
});


function printResume() {
    
    window.print();

}

  



$(document).ready(function() {
    $('#selectProfilePicBtn').click(function(event) {
        event.preventDefault();
        $('#profilePicInput').trigger('click');
    });

    $('#profilePicInput').on('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $('#profilePicPreview').attr('src', e.target.result).show();
            };
            reader.readAsDataURL(file);
        }
    });
});


$('#btn').click(function(event) {
    event.preventDefault();
    
    const imageData = $('#profilePicPreview').attr('src');

    $('#profilePicInResume').attr('src', imageData);
    
});



