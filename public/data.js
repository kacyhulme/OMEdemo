$(document).ready(function(){

// DATA: Date, # of questions, Accuracy, Status, link
let moduleReviewDataSet = [
[ "March 27, 2017", "44", "9%", "Completed", "Review"],
[ "March 3, 2017", "10", "20%", "Completed", "Review"],
[ "Feb 12, 2017", "39", "30%", "Completed", "Review"],
[ "Feb 10, 2017", "20", "88%", "Completed", "Review"],
[ "Dec 18, 2016", "3", "60%", "Completed", "Review"]
]

let remediationDataSet = [
[ "Pediatrics", "4 weeks", "Incomplete", "In Progress", "View"],
[ "Internal Medicine", "6 weeks", "280/300", "Completed", "Print"]

]

// NOTES: hiding all options to match styling
let commonOptions = {
  "paging": false,
  "ordering": false,
  "info": false,
  "searching": false
}

// NOTES: create variables to call jquery elements
let barchartable = $('#bar-chart-table');
let moduletable = $('#module_review_table');
let remediationtable = $('#remediation-history-table');

// NOTES: draw bar chart table
barchartable.DataTable(commonOptions);

moduletable.DataTable( Object.assign(commonOptions, {
  data: moduleReviewDataSet,
  columns: [
    { title: "Date" },
    { title: "# of questions" },
    { title: "Accuracy" },
    { title: "Status" },
    { title: "" }
  ]
})
);

remediationtable.DataTable( Object.assign(commonOptions, {
  data: remediationDataSet,
  columns: [
    { title: "Clerkship" },
    { title: "Duration" },
    { title: "Final Assessment Score" },
    { title: "Status" },
    { title: "" }
  ]
})
);

});