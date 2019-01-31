## projectjs-event-organizer

Това е университетски проект по избираемата дисциплина "Въведение в Javascript", който представлява органайзер на събития.

## Съдържание

index.html  
js/script.js - съдържа основната функционалност  
js/lock.js - помощен скрипт за реализиране на идеята със "заключването на системата"  
test commands.txt - съдържа тестови команди с примерни атрибути за функциите

## Основни функционалности
systemLocked.value=true; - заключва добавянето на клиенти и събития  //=false - ще направи обратното  
addEvent() - добавя събитие като изисква да въведем име,стойност true/false за 18+, дата и цена  
addClient() - добавя клиент като изисква да въведем име,възраст и пол   
getEvents() - връща масив с обекти събития  
getClients() - връща масив с обекти клиенти   
printSingleEvent() - извежда информация за едно конкретно събитие по подадено id  
   например: //printSingleEvent(1)  
printEvents() - извежда информация за всички добавени събития до момента, ако нищо не сте добавили ще си излезе съответното съобщение  
printClients() - извежда информация за всички добавени клиенти до момента, ако нищо не сте добавили ще си излезе съответното съобщение  
updateClient(id,name,age,gender) - ви дава възможността да промените информацията за вече въведен клиент   
   например: // updateClient(2,"Hannah",45,"female")  
deleteClient() - трие клиент по id  
   например: // deleteClient(1)  
deleteEvent() - трие събитие по id  
   например: // deleteEvent(2)  
addClientToEvent - добавя клиент към събитие по id  
   например: // addClientToEvent(2,1)   
printClientsByGender() - извежда клиенти, които присъстват на дадено събитие по пол в завимост какво подадете   
   например: // printClientsByGender(1,'male')  
printUnderagedEvents() - извежда събитията подходящи за непълнолетни  
groupByOver18Flag() - извежда подходящите събития за непълнолетни с “#”, а тези за пълнолетни с "*" пред името   
printByFilter() - извежда име на събитие/събития, които отговарят на флаг за достъп true || false  
   например: // printByFilter(true)  


## Acknowledgments
Този проект е възможен благодарение на:   
https://github.com/mihail-petrov/unijs-p1-2018-2019  
https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript  
https://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/  
https://www.taniarascia.com/how-to-use-local-storage-with-javascript/  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify  

