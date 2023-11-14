function getRandomTeacherImage() {
  const teachersImages = [
    "https://static.wixstatic.com/media/508759_fa5545b6524145b6996577554d85c619~mv2.jpg/v1/fit/w_875%2Ch_583%2Cal_c%2Cq_80,enc_auto/file.jpg",
    "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
    "https://focus.independent.ie/thumbor/cPzIXe01Pez5QYgWhqc5y4pYgjE=/0x26:840x490/1280x853/prod-mh-ireland/5df8c780-c0fc-11ed-a279-0210609a3fe2.png",
    "https://www.teachingtimes.com/wp-content/uploads/2020/03/2518984-scaled-1024x684.jpg",
    "https://us.123rf.com/450wm/tverdohlib/tverdohlib2204/tverdohlib220400210/184107733-man-teacher-thinking-portrait-of-smart-young-tutor-in-glasses-with-book-think-on-the-blackboard-in.jpg?ver=6",
    "https://media.gettyimages.com/id/1329104242/sv/foto/teacher-working-on-laptop.jpg?s=612x612&w=gi&k=20&c=SeFKilohyybOkhBcVFGmJkXNQ95BE7dEl9fmWvI2nrk=",
    "https://www.shutterstock.com/image-photo/distant-education-school-remote-job-260nw-2140275233.jpg",
    "https://c8.alamy.com/comp/M1B1BE/pleasant-professor-thinking-what-to-write-in-notebook-M1B1BE.jpg",
    "https://c8.alamy.com/comp/K6T0GY/teacher-with-a-book-and-a-wooden-stick-isolated-on-white-background-K6T0GY.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/11/16/92/1000_F_211169255_HUZ6Ya6Sm4A1v1Nb64KWW62KdkWNYjLg.jpg",
    "https://thumbs.dreamstime.com/b/portrait-young-female-teacher-white-portrait-young-female-teacher-white-background-157216197.jpg",
    "https://c8.alamy.com/comp/2H24RDK/portrait-of-female-teacher-with-laptop-on-white-background-2H24RDK.jpg",
    "https://s3.envato.com/files/428645353/1371829.jpg"
  ];
  const randomIndex = Math.floor(Math.random() * teachersImages.length);
  return teachersImages[randomIndex];
}

module.exports = getRandomTeacherImage;
