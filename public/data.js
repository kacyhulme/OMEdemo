$(document).ready(function(){

// DATA: Date, # of questions, Accuracy, Status, link
var moduleReviewDataSet = [
[ "March 27, 2017", "44", "9%", "Completed", "Review"],
[ "March 3, 2017", "10", "20%", "Completed", "Review"],
[ "Feb 12, 2017", "39", "30%", "Completed", "Review"],
[ "Feb 10, 2017", "20", "88%", "Completed", "Review"],
[ "Dec 18, 2016", "3", "60%", "Completed", "Review"]
]

var remediationDataSet = [
[ "Pediatrics", "4 weeks", "Incomplete", "In Progress", "View"],
[ "Internal Medicine", "6 weeks", "280/300", "Completed", "Print"]

]

// NOTES: hiding all options to match styling
var options = {
  "paging": false,
  "ordering": false,
  "info": false,
  "searching": false
}

$('#bar-chart-table').DataTable(options);

$('#module_review_table').DataTable( {
  "paging": false,
  "ordering": false,
  "info": false,
  "searching": false,
  data: moduleReviewDataSet,
  columns: [
  { title: "Date" },
  { title: "# of questions" },
  { title: "Accuracy" },
  { title: "Status" },
  { title: "" }
  ]
} );

$('#remediation-history-table').DataTable( {
  "paging": false,
  "ordering": false,
  "info": false,
  "searching": false,
  data: remediationDataSet,
  columns: [
  { title: "Clerkship" },
  { title: "Duration" },
  { title: "Final Assessment Score" },
  { title: "Status" },
  { title: "" }
  ]
} );

});