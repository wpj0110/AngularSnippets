# AngularSnippets

## KeyNotes:

## Stylings

Use Renderer when changing the stylings https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656172#overview

Hover Example 1 https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656176#content

Hover Example 2 Alternative https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656178#content using @HostBinding

Structural Directive  https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656186#content

Switch-Case ngSwitch https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656188#content

Dropdowns https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656192#content

Closing the Dropdown when you click anywhere https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656192#content

## Services

Services are great especially when you want to centralize some things together. It's less messy. You don't have to emit() as much as before!

Adding Services, such as Logs https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656210#content

Adding Services to the whole application https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656224#content

Injecting metadata @Injectable timestamp 4:08 https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656224#content

## Routers

Section 11 of Udemy Course --rewatch Lecture 145 - 153 I am lost

routerLink, routerLinkActive, routerLinkActiveOptions in html,

css Styling: routerLinkActive and routerLinkActiveOptions know when to use routerLinkActiveOptions and when you shouldn't. 
</br> Sample usage of routerLinkActiveOptions: [routerLinkActiveOptions]="{exact: true}"
</br> More sample usage of Relative Paths Timestamp 3:10 https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656294#overview
</br> Updating Content on the same page example using subscribe() https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656302#overview
</br> Good idea to use OnDestroy to destory subscribe() after it's not needed https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656306#overview
</br> Preserving Query Parameters https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656330#overview
</br> Making a routing file https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656338#overview
</br> Route Protection Privileges https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656342#overview


Routes and RouterModule in module.ts

Good idea to use "/" in your paths to say that you refer to that absolute path. No "/" means relative path

## Section 13 Observables

rxjs (install this first) 
</br> use interval from rxjs
</br> possible to have multiple observables at the same time. This is bad. Use Subscription from rxjs for this issue
</br> Use ngonDestroy with this https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466292#questions you will unsubscribe here
</br> Custom Observables are possible. This is an alternative
</br> You can give an error() for such cases and it will unsubscribe for you
</br> You can also use complete(). It will also unsubscribe on its own
</br> You rarely build your own observables since there's already a ton that are built-in
</br> Operators are sometimes used in between observables. Operators are simply just logic in between. rxjs/operators <-- this import
</br> Pipelining for operators is also a thing. Could do this for transforming data for example.

### Subjects

Could use EventEmitter, but subjects are an alternative
</br>  Subject is imported from rxjs
</br> You can call next() here from the outside, such as in a service. Services communicating to one another, Subject can be used for this.
</br> Replacing EventEmitters with Subjects https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466312#questions
</br> Instead of emit(), use next() for subjects
</br> make sure to store that subscritption in a variable type Subscription so you can destroy this later/


## Section 14 Forms 
</br> In summary this reminds me of the forms that everyone uses when signing up a new account

It will all be in JSON
</br> Template Driven or Reactive
</br> You can use ngModel again, especially for two way binding
</br> in the form tag, use ngSubmit
</br> #localPropertyName="ngForm" means that you will have immediate access to the object created by the form
</br> You can see the properties of the form you currently have. Very useful if there are particular  stuff that you want to take advatnage of 
</br> Alternative way to the form is by using @ViewChild https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656468#questions
</br> you can add "required" in the input tag.... means the input has to be filled
</br> You can see its validity through the valid property for example inside the form
</br> Sample of checking the validity through here... https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656472#questions
</br> You can add extra data in the form... https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656484#questions

### Radio Buttons
</br> https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656486#questions it's just like any other forms/inputs.


