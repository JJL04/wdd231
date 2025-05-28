document.addEventListener("DOMContentLoaded", () => {
    // === Footer: Set current year and last modified ===
    const currentYearEl = document.getElementById("currentYear");
    const lastModifiedEl = document.getElementById("lastModified");

    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }

    // === Course Data (optional usage) ===
    const courses = [
        { name: 'Business Strategy', category: 'business', credits: 3 },
        { name: 'Marketing 101', category: 'marketing', credits: 2 },
        { name: 'Advanced Economics', category: 'business', credits: 4 },
        { name: 'Social Media Marketing', category: 'marketing', credits: 3 }
    ];

    const courseList = document.getElementById("courseList");

    function displayCourses(filteredCourses) {
        if (!courseList) return;

        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = `${course.name} - ${course.credits} credits`;
            courseList.appendChild(li);
        });
    }

    if (courseList) {
        displayCourses(courses); // initial display
    }

    window.filterCourses = function () {
        const filterSelect = document.getElementById("courseFilter");
        if (!filterSelect) return;

        const selected = filterSelect.value;
        const filteredCourses = selected === 'all'
            ? courses
            : courses.filter(course => course.category === selected);

        displayCourses(filteredCourses);
    };

    // === Weather Display (Placeholder) ===
    // TODO: Add API call to fetch local weather data, and render it in a weather widget.

    // === Spotlight Section (Placeholder) ===
    // TODO: Add logic to fetch spotlight data and inject spotlight cards dynamically.
});
