// Query Necessary Schedule Parts
const scheduleBackdground = document.querySelector(".schedule-background");
const mtn1 = document.getElementById('mtn1');
const mtn2 = document.getElementById('mtn2');
const scheduleTable = document.getElementById('scheduleTable');

// Schedule Table Information:
const schedule2innerHTML =  `<tr>  <td class="tcr x">17 Nov 2016 </td> <td class="tcl x">Vestibulum viverra</td> </tr> <tr>  </tr> <tr>  <td class="tcr">13 Dec 2016 </td> <td class="tcl">Vestibulum viverra</td> </tr> <tr>  <td class="tcr x">28 Dec 2016 </td> <td class="tcl x">Vestibulum viverra</td> </tr> <tr>   </tr> <tr>  <td class="tcr">7 Jan 2017 </td> <td class="tcl">Vestibulum viverra</td> </tr>`

const schedule1innerHTML = `<tr>  <td class="tcr">25 Nov 2016 </td> <td class="tcl">Vestibulum viverra</td> </tr> <tr>  <td class="tcr x">28 Nov 2016 </td> <td class="tcl x">Vestibulum viverra</td>
 </tr> <tr>  </tr> <tr>  <td class="tcr x">18 Dec 2016 </td> <td class="tcl x">Vestibulum viverra</td> </tr> <tr>   </tr> <tr>  <td class="tcr">7 Jan 2017 </td> <td class="tcl">Vestibulum viverra</td> </tr>`


// Handler Function to Change Schedules and Bgn Images
const showMountainSchedule = (mtn) => {
    scheduleBackdground.style.backgroundImage = `url("./Images/Mountain ${mtn}.png")`;
    if (mtn === 1){
        mtn1.classList.add('active');
        mtn2.classList.remove('active');
        scheduleTable.innerHTML = schedule1innerHTML;
    } 
    else {
        mtn2.classList.add('active');
        mtn1.classList.remove('active');
        scheduleTable.innerHTML = schedule2innerHTML;
    }
    console.log('updated schedule to mountain ' + mtn)
}

// Initialize Schedule / Image
let num = 1;
showMountainSchedule(num);

// Handle Accordion Mobile Tabs:
document.getElementById("accordion-btn").addEventListener("click", function() {
    const accordionContent = document.querySelector(".accordion-content");
    accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
});