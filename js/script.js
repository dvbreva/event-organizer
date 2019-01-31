class Event {
    constructor(id,name,over18Flag=Boolean,date,price=0) {
        this.id=id;
        this.name=name;
        this.over18Flag=over18Flag;
        this.date=date;
        this.price=price;
    }
}
 
class Client {
    constructor(id,name,age,gender) {
        this.id=id;
        this.name=name;
        this.age=age;
        this.gender=gender;  
    }
}

function addEvent(name,over18Flag,date,price) {

    if(systemLocked.value==true) {
        console.log("You cannot add anything because the event organizer is turned off.")
        console.log("Turn it on in order to start adding stuff again..")
        return;
    }
   
    let eventsCollection=[];
 
    if(name == "")
    {
        console.log("Your input for name is incorrect.")
        return;
    }
 
    if(over18Flag != true && over18Flag != false)
    {
        console.log("Your input for whether the event is suitable for underaged clients is incorrect.")
        return;
    }

    if(price==null) 
    {
        console.log("This event is actually free.");
    }
 
    if(localStorage.getItem('eventsCollection')== null || localStorage.getItem('eventsCollection') == '[]') 
    {
        let id=1;
        let singleEvent=new Event(id,name,over18Flag,date,price);
        eventsCollection.push(singleEvent);
        localStorage.setItem('eventsCollection', JSON.stringify(eventsCollection));
    } 
    else 
    {
        let id=JSON.parse(localStorage.getItem('eventsCollection')).pop().id+1;
        let singleEvent=new Event(id,name,over18Flag,date,price);
        JSON.parse(localStorage.getItem('eventsCollection')).forEach(function (item) {
            eventsCollection.push(item);
        });
        eventsCollection.push(singleEvent);
        localStorage.setItem('eventsCollection', JSON.stringify(eventsCollection));
    }
    console.log("You have successfully added an event.");
}
 
function getEvents() {
    if(localStorage.getItem('eventsCollection')!=null)
    {
        let eventsCollection=[];
        JSON.parse(localStorage.getItem('eventsCollection')).forEach(function (singleEvent) {
            eventsCollection.push(singleEvent);
        });
        return eventsCollection;
    }
    else
    {
        console.log("You currently have no events added so proceed to add one before trying to use that :D ")
    }
}
 

function getEventById(eventId) {

    if(!Number.isInteger(eventId)) {
        console.log("Event id must be a int number.")
    }

    //proverka dali sushtestvuvat eventi at all
    if(localStorage.getItem('eventsCollection')!=null) {
        let eventsCollection=getEvents();
        let singleEvent={};
        eventsCollection.forEach(function (element) {
            if(element.id==eventId) {
                singleEvent=element;
            }
        });
        return singleEvent;
    }
}

function printSingleEvent(eventId) {

    eventsCollection=getEvents();

    eventsCollection.forEach(function (singleEvent) {
        if(singleEvent.id==eventId) {
            console.log(singleEvent.name);
            console.log(singleEvent.over18Flag);
            console.log(singleEvent.price);
        }
    });
}

function printEvents() {

    let freeSeparator="!";
    let paidSeparator="$";

    if(localStorage.getItem('eventsCollection')==null) 
    {
        console.log("No events to print actually.")
        return;
    }
    else
    {
        console.log("Events stored so far:");
        getEvents().forEach(function(item) {

            if(item.price!=0 && item.date!=null) 
            {
                console.log("ID: "+ item.id);
                console.log("NAME: "+ paidSeparator + " " + item.name);
                console.log("UNSUITABLE FOR UNDERAGED (18+): "+ item.over18Flag);
                console.log("DATE: " + item.date);
                console.log("PRICE: "+ item.price +"$");
                console.log(" ");
            }
            else if(item.price!=0 && item.date==null) 
            {
                console.log("ID: "+ item.id);
                console.log("NAME: "+ paidSeparator + " " + item.name);
                console.log("UNSUITABLE FOR UNDERAGED (18+): "+ item.over18Flag);
                console.log("DATE: no date set so far " );
                console.log("PRICE: "+ item.price +"$");
                console.log(" ");
            }
            else if(item.price==0 && item.date!=null) 
            {
                console.log("ID: "+ item.id);
                console.log("NAME: "+ freeSeparator + " " + item.name);
                console.log("UNSUITABLE FOR UNDERAGED (18+): "+ item.over18Flag);
                console.log("DATE: " + item.date);
                console.log("PRICE: "+ item.price+"$");
                console.log(" >> This event is actually free.");
                console.log(" ");
            }
            else if(item.price==0 && item.date==null) 
            {
                console.log("ID: "+ item.id);
                console.log("NAME: "+ freeSeparator + " " + item.name);
                console.log("UNSUITABLE FOR UNDERAGED (18+): "+ item.over18Flag);
                console.log("DATE: no date set soo far");
                console.log("PRICE: "+ item.price+"$");
                console.log(" >> This event is actually free.");
                console.log(" ");
            }
        });
    }
}
 
function addClient(name,age,gender) {

    if(systemLocked.value) {
        console.log("You cannot add anything because the event organizer is turned off.")
        console.log("Turn it on in order to start adding stuff again..")
        return;
    }
    
    let clientsCollection=[];

    if(name==''||name==null) {
        console.log("Your input for name is incorrect.");
        return;
    }
   
    if(!Number.isInteger(age)) {
        console.log("Your input for age is incorrect. Age must be a number.");
        return;
    }
 
      
    if(localStorage.getItem('clientsCollection')== null || localStorage.getItem('clientsCollection') == '[]') {
        let id=1;
        let client=new Client(id,name,age,gender);
        clientsCollection.push(client);
        localStorage.setItem('clientsCollection', JSON.stringify(clientsCollection));
    }
    else
    {
        let id=JSON.parse(localStorage.getItem('clientsCollection')).pop().id + 1;
        let client = new Client(id, name, age,gender);
        JSON.parse(localStorage.getItem('clientsCollection')).forEach(function (item) {
            clientsCollection.push(item);
        });
        clientsCollection.push(client);
        localStorage.setItem('clientsCollection', JSON.stringify(clientsCollection));
    }
 
    console.log("New client has been added successfully.");
}
 
function getClients() {

    if (localStorage.getItem('clientsCollection') != null) {
        let clientsCollection = [];
        JSON.parse(localStorage.getItem('clientsCollection')).forEach(function (client) {
            clientsCollection.push(client);
        });
        return clientsCollection;
    };
}
 
function getClientById(clientId) {
 
    if (!Number.isInteger(clientId)) {
        console.log('Client ID must be a number.');
        return;
    }

    if (localStorage.getItem('clientsCollection') != null) {
        let clientsCollection = getClients();
        let client = {};
        clientsCollection.forEach(function (element) {
            if (element.id == clientId) {
                client = element;
            }
        });
        return client;
    }
}
 
function printClients() {

    if (localStorage.getItem('clientsCollection') == null) 
    {
        console.log("There are no clients so far so you may add one.");
        return;
    }
    else
    {
        console.log("These are the clients you have added so far: ");
        getClients().forEach(function (item) {
            console.log("ID: " + item.id);
            console.log("NAME: " + item.name);
            console.log("AGE: " + item.age);
            console.log("GENDER: " + item.gender);
            console.log(" ");
    });
    };
}
 
function deleteClients(id) {

    let clientsCollection=[];
    let items=[];

    getClients().forEach(function (item) {
        clientsCollection.push(item);
    });
    
    clientsCollection.forEach(function (item) {
        if (item.id !== id) {
            items.push(item);
        }
    });

    localStorage.setItem('clientsCollection', JSON.stringify(items));
    console.log("Client " + id + " has been deleted.");
 
}
 
function deleteEvents(id) {

    let eventsCollection=[];
    let items=[];

    getEvents().forEach(function (item) {
        eventsCollection.push(item);
    });

    eventsCollection.forEach(function (item) {
        if(item.id!=id) 
        {
            items.push(item);
        }
    });

    localStorage.setItem('eventsCollection', JSON.stringify(items));
    console.log("Event with id: " + id + " has been deleted.");
}

// update client
function updateClient(id, name, age, gender) {

    let clientsCollection = getClients();

    clientsCollection.forEach(function (client) {
        if (client.id == id) 
        {
            client.name = name;
            client.age= age;
            client.gender= gender;
        }
    });
    localStorage.removeItem('clientsCollection');
    localStorage.setItem('clientsCollection', JSON.stringify(clientsCollection));

    console.log("Client with ' + id + ' has been updated successfully.");
}

// add client to event 
function addClientToEvent(eventId,clientId) {
    if (eventId == '' || eventId == null) 
    {
        console.log("You must enter id of an event.");
        return;
    }
    if (clientId == '' || clientId == null) 
    {
        console.log("You must enter id of a client.");
        return;
    }
   
    // check dali e number

    let singleEvent = getEventById(eventId);
    let client = getClientById(clientId);

    let eventsCollection =[];
    let alertVariable = 0;

    eventsCollection.forEach(function (eventId) {
        if (eventId.id == eventId)
         {
            eventId.clientsCollection.forEach(function (clientId) {
                if (clientId.id == clientId) 
                {
                    console.log("This client has been added to that event list already.");
                    alertVariable=1;
                };
                alertVariable = 0;
            });
            if (eventId.over18Flag == "true" && client.age < 18) {
                console.log("He/she can not be added to the event list.");
                console.log("He/she is underage.")
                alertVariable=1;
            }
            eventId.clientsCollection.push(client);
        }
    });
    if (alertVariable == 0) {
        console.log("Client with id = " + clientId + " has been added to event with id = " + eventId + " successfully.");
        localStorage.setItem('eventsCollection', JSON.stringify(eventsCollection));
    }
}


// print event with female/male clients 
function printClientsByGender(eventId,gender) {
    if (!Number.isInteger(eventId)) 
    {
        console.log('Event id must be a number.');
        return;
    }

    if(gender!="female" && gender!="male") 
    {
        console.log("Wrong input for gender.");
    }

    let singleEvent = getEventById(eventId);
    let clientsCollection=getClients();

    clientsCollection.forEach(function (item){
        if(gender=="female") 
        {
            if(item.gender==gender) 
            {
                console.log("ID: " + item.id);
                console.log("NAME: " + item.name);
                console.log("AGE: " + item.age);
                console.log("GENDER: " + item.gender);
                console.log(" ");
            }  
        }
        else if(gender=="male") 
        {
            if(item.gender==gender) 
            {
                console.log("ID: " + item.id);
                console.log("NAME: " + item.name);
                console.log("AGE: " + item.age);
                console.log("GENDER: " + item.gender);
                console.log(" ");
            }
        }
    });
}

//adding date
function addDate(id,date) {

    let eventsCollection = getEvents();

    eventsCollection.forEach(function (singleEvent) {
        if (singleEvent.id == id) {
           singleEvent.date=date;
        }
    });

    localStorage.removeItem('eventsCollection');
    localStorage.setItem('eventsCollection', JSON.stringify(eventsCollection));

    console.log("A date: " + date + " has been added to event with id " + id);
}

//function for getting all events that are suitable for people under 18
function printUnderagedEvents() {

    let eventsCollection = getEvents();

    if (localStorage.getItem('eventsCollection') == null)
    {
        console.log('No events matching your criteria.');
    }
    else 
    {
        console.log('Events for underaged: ');
        eventsCollection.forEach(function (singleEvent) {
            if (singleEvent.over18Flag == false)
            {
            console.log("Name: " + singleEvent.name);
            }
        });
    }
}

// * 18+ true 
function groupByOver18Flag(over18Flag) {

    let firstSeparator = "*";
    let secondSeparator = "#";

    let eventsCollection = getEvents();

    if(over18Flag==true) 
    {
    console.log('Events for underaged: ');
    eventsCollection.forEach(function (singleEvent) {
        if (singleEvent.over18Flag == true)
        {
            console.log(firstSeparator + " " + singleEvent.name);
        }
     });
    }  
    else 
    {
    console.log('Events for adults: ');
    eventsCollection.forEach(function (singleEvent) {
        if (singleEvent.over18Flag == false) 
        {
            console.log(secondSeparator + " " + singleEvent.name);
        }
      });
    }
}

//Създайте механизъм за филтриране на събития по определен критерии. Функцията трябва
//да има възможност да получава име / или флаг за достъп и да визуализира само тези
//събития които отговарят на критериите. 
function printByFilter(input) {

    let eventsCollection = getEvents();

    if(input==true) {
    console.log('Names of events that match your criteria: ');
    eventsCollection.forEach(function (singleEvent) {
        if (singleEvent.over18Flag == true) {
            console.log(">>" + singleEvent.name);
        }
    });
    }  
    else if(input==false) {
        console.log('Names of events that match your criteria: ');
        eventsCollection.forEach(function (singleEvent) {
             if (singleEvent.over18Flag == false) {
                 console.log(">>" + singleEvent.name);
            }
         });
    }
    else {
        console.log("You need to enter a boolean value for this to work.")
    }
}
