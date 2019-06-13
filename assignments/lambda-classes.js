// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
    }   
}

class Instructor extends Person {
    constructor(info) {
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }

    demo(subj) {
        return `Today we are learning about ${subj}!`;
    }

    // Grade method here
    grade(student, subject) {
        return `${student} receives a perfect score on a ${subject}`;
    }
}

class Student extends Person {
    constructor(info) {
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
    }

    listSubjects() {
        console.log('list of favorite subjects:');
        return this.favSubjects.forEach((x, index) => console.log(`${index + 1}: ${x}`));
    }

    PRassignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(info) {
        super(info);
        this.gradClassName = info.className;
        this.favInstructor = info.favInstructor;
    }

    standup(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 32,
    location: 'Utah',
    specialty: 'HTML & CSS',
});

const dennis = new Student({
    name: 'Dennis',
    age: 29,
    location: 'Wisconsin',
    previousBackground: 'Health IT',
    className: 'web21',
    favSubjects: ['Javascript', 'HTML', 'CSS', 'Back-end Dev']
});

const jackie = new ProjectManager({
    name: 'Jackie',
    age: 29,
    location: `NYC`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
})


console.log(dan.speak());
console.log(dan.demo('HTML & CSS'));
console.log(dan.grade(dennis.name, 'HTML & CSS'));
console.log(dennis.listSubjects());
console.log(dennis.PRassignment('Javascript'));
console.log(dennis.sprintChallenge('Back end dev'));
console.log(jackie.standup('#web_21'));
console.log(jackie.debugsCode(dennis.name, 'Javascript'));