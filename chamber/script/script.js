document.addEventListener("DOMContentLoaded", () => {
    // === Footer: Set current year and last modified ===
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }

    // === Course Filtering (if used on the page) ===
    const courses = [
        { name: 'Business Strategy', category: 'business', credits: 3 },
        { name: 'Marketing 101', category: 'marketing', credits: 2 },
        { name: 'Advanced Economics', category: 'business', credits: 4 },
        { name: 'Social Media Marketing', category: 'marketing', credits: 3 }
    ];

    const courseList = document.getElementById("courseList");

    const displayCourses = (filteredCourses) => {
        if (!courseList) return;
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = `${course.name} - ${course.credits} credits`;
            courseList.appendChild(li);
        });
    };

    if (courseList) {
        displayCourses(courses);
    }

    window.filterCourses = () => {
        const filterSelect = document.getElementById("courseFilter");
        if (!filterSelect) return;

        const filterValue = filterSelect.value;
        const filtered = filterValue === 'all'
            ? courses
            : courses.filter(course => course.category === filterValue);

        displayCourses(filtered);
    };

    // === Weather Display Placeholder ===
    // TODO: Add logic to fetch and display local weather data here

    // === Spotlight Section Placeholder ===
    // TODO: Add logic to fetch and display spotlight cards here
});
