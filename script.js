document.addEventListener("DOMContentLoaded", function () {
    const workList = document.getElementById("work-list");
    const workContent = document.getElementById("work-content");

    workContent.innerHTML = `<iframe src="works/landing.html" frameborder="0" width="100%" height="300px"></iframe>`;

    // Work titles and corresponding file URLs
    const works = {
        "task0": { "title": "Home", "url": "works/landing.html" },
        "task14": { "title": "Task 2 - Index Page", "url": "works/2/index_page.html" },
        "task1": { "title": "Task 3 - Google", "url": "works/3/task3.html" },
        "task2": { "title": "Task 4 - Username", "url": "works/4/index-1.html" },
        "task3": { "title": "Task 5 - Calculator", "url": "works/5/index.html" },
        "task16":{ "title": "Task 6 - Git hub Integration", "url": "works/6/index.html" },
        "task17":{ "title": "Task 7 - Console Output", "url": "works/7/index.html" },
        "task4": { "title": "Task 8 - To Caps", "url": "works/8/index-2.html" },
        "task5": { "title": "Task 9 - Grading Calculator", "url": "works/9/index-3.html" },
        "task6": { "title": "Task 10 - To Do Task", "url": "works/10/index-4.html" },
        "task7": { "title": "Task 11 - Right-Triangle ", "url": "works/11/index-5.html" },
        "task8": { "title": "Task 11 - Sum of numbers", "url": "works/11/sum.html" },
        "task9": { "title": "Task 12 - Student Info", "url": "works/12/index4.html" },
        "task10": { "title": "Task 12 - Car Info", "url": "works/12/index5.html" },
        "task11": { "title": "Task 13 - Storage and Search", "url": "works/13/index6.html" },
        "task12": { "title": "Task 14 - Random numbers and color", "url": "works/14/index1.html" },
        "task13": { "title": "Task 15 - Car Age calculator", "url": "works/15/index9.html" },
        "task15": { "title": "Task 16 - Bootstrap form", "url": "works/16/index10.html" },
    };

    // Populate navigation panel
    for (const key in works) {
        let listItem = document.createElement("li");
        listItem.textContent = works[key].title;
        listItem.dataset.url = works[key].url;
        listItem.addEventListener("click", function () {
            loadWorkContent(this.dataset.url);
        });
        workList.appendChild(listItem);
    }

    // Function to display content inside the main section without reloading
    function loadWorkContent(url) {
        workContent.innerHTML = `<iframe src="${url}" frameborder="0" width="100%" height="300px"></iframe>`;
    }
});
