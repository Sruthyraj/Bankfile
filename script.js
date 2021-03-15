class Bank {



    static getAccountDetails() {


        var accountdetails = {

            1000: { acno: 1000, name: "userone", balance: 5000, password: "user0" },
            1001: { acno: 1001, name: "usertwo", balance: 3000, password: "user1" },
            1002: { acno: 1002, name: "userthree", balance: 4500, password: "user2" },
            1003: { acno: 1003, name: "userfour", balance: 4000, password: "user3" },
            1004: { acno: 1004, name: "userfive", balance: 5000, password: "user4" }
        }

        return accountdetails;

    }
    static authenticateuser(acno, passrd) {

        let data = Bank.getAccountDetails();
        if (acno in data) {
            if (passrd == data[acno]["password"]) {
                return 0
            }
            else {
                return 1
            }

        }
        else {
            return -1
        }
    }



    static login() {
        let accnt = document.getElementById("accno").value;
        let passrd = document.getElementById("pwd").value;
        let data = Bank.getAccountDetails();
        if (accnt in data) {

            if (passrd == data[accnt]["password"]) {
                alert("sucessfully login")
                window.location.href = "userhome.html";
            }
            else {
                alert("invalid login")
            }
        }
        else {
            alert("user not exist")
        }




    }


    static deposit() {

        let acno = document.querySelector("#accno").value;
        let passrd = document.getElementById("pwd").value;
        let amount = document.getElementById("amt").value;
        let user = Bank.authenticateuser(acno, passrd)
        let data = Bank.getAccountDetails()
        if (user == 0) {
            data[acno]["balance"] += Number(amount);
            alert("aval balace " + data[acno]["balance"])
        }
        else if (user == 1) {
            alert("invalid password")
        }
        else {
            alert("invalid account number")
        }

    }
    static withdraw() {
        let acno = document.querySelector("#accno").value;
        let passrd = document.getElementById("pwd").value;
        let amount = document.getElementById("amt").value;
        let user = Bank.authenticateuser(acno, passrd);
        let data = Bank.getAccountDetails();

        if (user == 0) {
            if (amount > data[acno]["balance"]) {
                alert("insufficirnt amount")
            }
            else {

                data[acno]["balance"] -= Number(amount)
                alert(data[acno]["balance"])
            }
        }
    }

}



