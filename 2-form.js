import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const r="feedback-form-state",t={email:"",message:""},a=document.querySelector(".feedback-form");l();a.addEventListener("input",e=>{t[e.target.name]=e.target.value.trim(),localStorage.setItem(r,JSON.stringify(t))});function l(){const e=JSON.parse(localStorage.getItem(r));e&&(a.querySelector("input").value=e.email,a.querySelector("textarea").value=e.message)}a.addEventListener("submit",e=>{if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}console.log(t),a.reset(),localStorage.removeItem(r),t.email="",t.message=""});
//# sourceMappingURL=2-form.js.map
