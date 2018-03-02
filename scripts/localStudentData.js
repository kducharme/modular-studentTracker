const gitHubInteraction = require("./gitHubInteraction.js")

let cohort = "";

$("#classBtn").on("click", function (event) {
    let jsonAddress = event.target.id
    if(jsonAddress.startsWith("c__")){
        $("#output").html("")
        let cohort = `../c${jsonAddress.split("__")[1]}.json`
        getStudentData(cohort).then(students => {
            gitHubInteraction(students)
        })
    }
})

function getStudentData(cohort) {
    $(".loader-gif").hide()
    $(".loader-gif2").show()

    let localDataPromise = $.ajax({
            type: "GET",
            url: cohort
        });

    return localDataPromise
}

module.exports = getStudentData