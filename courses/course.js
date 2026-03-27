function showCourse(name){
let courses = document.querySelectorAll(".course");
courses.forEach(c => c.classList.remove("active"));

```
document.getElementById(name).classList.add("active");
```

}

// AUTO LOAD FROM URL
const params = new URLSearchParams(window.location.search);
const selected = params.get("course") || "dsa";
showCourse(selected);
