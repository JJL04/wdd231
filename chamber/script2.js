document.addEventListener("DOMContentLoaded", function () {
    // Set current year
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    // Set last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Course data
    const courses = [
        { name: 'Business Strategy', category: 'business', credits: 3 },
        { name: 'Marketing 101', category: 'marketing', credits: 2 },
        { name: 'Advanced Economics', category: 'business', credits: 4 },
        { name: 'Social Media Marketing', category: 'marketing', credits: 3 }
    ];

    const courseList = document.getElementById("courseList");

    // Function to display courses
    function displayCourses(filteredCourses) {
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = `${course.name} - ${course.credits} credits`;
            courseList.appendChild(li);
        });
    }

    // Display all courses initially
    displayCourses(courses);

    // Filter courses
    window.filterCourses = function () {
        const filterValue = document.getElementById('courseFilter').value;
        const filteredCourses = filterValue === 'all' ? courses : courses.filter(course => course.category === filterValue);
        displayCourses(filteredCourses);
    }
});
