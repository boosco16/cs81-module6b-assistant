### What made your assitant "personal" to you? 

The tasks are things that I actually have on my to do list today. The mood chancing from productive to accomplished actually reflects what I feel after completing those tasks.
Feeding the object with my own to do list allows me to see the potential of what else it could be used for. 

### What challenges did you face using "this"? 

Same issues as 6A. Remebering that "this" inside a prototype method referes to whichever object called it, not the Personal Assistant function itself. I almost wrote 
jarvis.tasks directly insdie the completeTask() method on accident before remebering it should just be this.tasks. 

### Which method would you improve or expand? 

completeTask() always removes whatever task is first in the array, even if that's not the one I actually finished. I'd want to expand it to take a task task names and an argument,
so I could complete a specific task insstead of always being stuck with whatever's first in line. 
