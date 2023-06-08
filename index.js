const fetchEmails = async () => {
    const emails = await fetch('https://flipkart-email-mock.now.sh')
    let data = await emails.json()
    addEmails(data.list)
}
const onClickHandler = (event) => {
    console.log(event, "event")
    const emailDetail = document.getElementsByClassName("email-detail")[0]
    console.log(emailDetail, "emaildetail")
    emailDetail.style.display = 'block'
}


const addEmails = (emails) => {
    const container = document.getElementsByClassName("container")[0]
    let emailBox = ""
    emails.forEach(element => {
        // console.log(element, "element")
        emailBox += `
        <div class="single-email" dataId=${element.id} onClick="onClickHandler(event)">
            <div class="profile">
                <img src="https://i.pravatar.cc/300" alt="profile">
            </div>
            <div class="email-info">
                <div>
                    From: ${element.from.email}
                </div>
                <div>
                    Subject: ${element.subject}
                </div>
                <div class="body">

                </div>
                <div class="date">
                    date: ${new Date(element.date).toISOString()}
                </div>
            </div>
        </div>
    `
    });
    container.innerHTML = emailBox
    const singleEmail = document.getElementsByClassName("single-email")




}



const getEmailDetail = async (id) => {
    let emailDetailDiv = document.getElementsByClassName("email-detail")[0]
    const emails = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
    let data = await emails.json()
    console.log(data, "data")
    let emailDetail = `
         <div class="profile">
             <img src="https://i.pravatar.cc/300" alt="">
         </div>
         <div class="email-date">
             Date:
         </div>
         <div class="email-body">
          
         </div>
     `
    emailDetailDiv.innerHTML = emailDetail
}

fetchEmails()