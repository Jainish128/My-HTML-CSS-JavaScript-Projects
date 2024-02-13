
var arr = [
    {
        dp: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/2/10/original/p4kgf1.jpg",
        story: "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-3-39-1-2-1-1-1-1.png"
    },
    {
        dp: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/14/full/1691996389-775.png",
        story: "https://m.media-amazon.com/images/M/MV5BZGEzMDJjNGUtYTFhZi00MDgyLWIzMzYtMzcwMDQyZjcyNGY1XkEyXkFqcGdeQXVyNTcwNTM5ODI@._V1_.jpg"
    },
    {
        dp: "https://www.livemint.com/lm-img/img/2023/09/05/600x338/SRK_Jawan_2_1693886472609_1693886478261.jpg",
        story: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-1x1.jpg?VersionId=flG135APjYu35mqHqhjNACK3.P335ZY8"
    },
    {
        dp: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/2/10/original/p4kgf1.jpg",
        story: "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-3-39-1-2-1-1-1-1.png"
    },
    {
        dp: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/14/full/1691996389-775.png",
        story: "https://m.media-amazon.com/images/M/MV5BZGEzMDJjNGUtYTFhZi00MDgyLWIzMzYtMzcwMDQyZjcyNGY1XkEyXkFqcGdeQXVyNTcwNTM5ODI@._V1_.jpg"
    },
    {
        dp: "https://www.livemint.com/lm-img/img/2023/09/05/600x338/SRK_Jawan_2_1693886472609_1693886478261.jpg",
        story: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-1x1.jpg?VersionId=flG135APjYu35mqHqhjNACK3.P335ZY8"
    },
    {
        dp: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/2/10/original/p4kgf1.jpg",
        story: "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-3-39-1-2-1-1-1-1.png"
    },
    {
        dp: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/14/full/1691996389-775.png",
        story: "https://m.media-amazon.com/images/M/MV5BZGEzMDJjNGUtYTFhZi00MDgyLWIzMzYtMzcwMDQyZjcyNGY1XkEyXkFqcGdeQXVyNTcwNTM5ODI@._V1_.jpg"
    },
    {
        dp: "https://www.livemint.com/lm-img/img/2023/09/05/600x338/SRK_Jawan_2_1693886472609_1693886478261.jpg",
        story: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-1x1.jpg?VersionId=flG135APjYu35mqHqhjNACK3.P335ZY8"
    },
    {
        dp: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/2/10/original/p4kgf1.jpg",
        story: "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-3-39-1-2-1-1-1-1.png"
    }
]

var clutter = "";
var stories = document.querySelector(".stories");
var story = document.querySelector("#full-screen");

arr.forEach(function (elem,idx) {
    clutter += `
    <div class="story">
        <img id="${idx}" src="${elem.dp}">
    </div> 
    `;
})

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
    
    story.style.display = "block";
    story.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(() => {
        story.style.display = "none";
    }, 3000);

})


