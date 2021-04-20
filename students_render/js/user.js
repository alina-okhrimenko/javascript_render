let usersDiv = document.querySelector('.users');

export class User{
    constructor(data){
        this.getData(data);
    }

    async getData(file){
		let response = await fetch(file),
			data = await response.json();
    
        this.setInfo(data)
	}  

    setInfo(data){
        for (let key in data){
            this[key]=data[key];
        }
        this.renderUser();  
        this.renderCourses();
    }
   
    renderUser(){
        let {gradation, roles, users} = this;
        users.forEach(function(item) {
            let user = document.createElement("div");
            user.classList.add("user");

            let userInfo = document.createElement("div");
            userInfo.classList.add("user__info")
            user.append(userInfo);

            let userCourses = document.createElement("div");
            userCourses.classList.add("user__courses")
            user.append(userCourses);

            let infoData = document.createElement("div");
            infoData.classList.add("user__info--data");
            userInfo.append(infoData);


            let userNaming = document.createElement("div");
            userNaming.classList.add("user__naming")
            infoData.append(userNaming);
          

            Object.keys(item).forEach(function (key) {
                if (key	===	'courses') {
                    item[key].forEach(function(i){
                        Object.keys(i).forEach(k => {
                            if (k==='title'){
                                let userCourse = document.createElement('p');
                                userCourse.classList.add("user__courses--course");
                                userCourse.innerHTML = `${i[k]}`;
                                userCourses.append(userCourse);
                            }
                        })
                    })
                }
                if (key	===	'role') {
                    let role = document.createElement('div');
                    role.classList.add("user__info--role");
                    userInfo.append(role);

                    let roleName = document.createElement('p');
                    roleName.innerHTML = item[key];

                    role.append(roleName);

                    let roleImg = document.createElement('img');
                    roleImg.setAttribute('height', 25);
                    role.append(roleImg);
                      
                    if (item[key] === 'student'){
                        role.classList.add(`${item[key]}`);
                        roleImg.setAttribute('src', `${roles[item[key]]}`);
                    };
                    if (item[key] === 'lector'){
                        role.classList.add(`${item[key]}`);
                        roleImg.setAttribute('src', `${roles[item[key]]}`)
                    };
                    if (item[key] === 'admin'){
                        role.classList.add(`${item[key]}`);
                        roleImg.setAttribute('src', `${roles[item[key]]}`)
                    };
                    
                }
                if (key	===	'name') {
                    let name = document.createElement('p');
                    name.innerText = "Name: ";
                    let b = document.createElement('b');
                    name.append(b);
                    b.innerHTML = `${item[key]}`;
                    userNaming.append(name);
                }
                if (key	===	'age') {
                    let age = document.createElement('p');
                    age.innerText = "Age: ";
                    let b = document.createElement('b');
                    age.append(b);
                    b.innerHTML = `${item[key]}`;
                    userNaming.append(age);
                }
                if (key	===	'img') {
                    let img = document.createElement('img');
                    img.setAttribute('src', item[key]);
                    img.setAttribute('height', 50);
                    infoData.append(img);
                }
                
            })
            
            usersDiv.append(user);
        });    
    }
}
 new User("data.json");




