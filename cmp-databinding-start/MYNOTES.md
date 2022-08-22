In this project, decorators were used.
Ex. @Input()
    Parent components can use properties of child components with this.

You can also make aliases.
---in server-element.component.ts
     @Input('srvElement') element: {type: string, name: string, content: string};
     srvElement must also be the property name to be used in app.component.html

Passing information from the child to the parent component example:. @Output will be used here.
---goes like this: child.component.ts -> child.component.html -> parent.component.html -> parent.component.ts
---cockpit component to app component
---you need methods in cockpit.component.ts paired with your app.component.ts.
-----the methods in app.component.ts will be used as event listeners and take the information.
-----notice in app.component.html that the corresponding app.component.ts methods are used there.
---you will need EventEmitters (check cockpit.component.ts) and the corresponding object to pass in it.
---notice that the methods in cockpit.component.ts has those functions to emit the information.
---Aliases are possible too https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656078#questions

Styles:
---Angular by default only lets the styles be local on the component it is located. However, you can change this with ViewEncapsulation (check server-element.component.ts)

Local References in Templates:
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656092#questions
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656094#questions

ng-content within your child component htmls... reusing widgets https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656100#questions

Component Lifecycle
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656102#questions

---You can see the lifecycle of the components just like how it was in an Android Application. https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656106#questions/6361612

