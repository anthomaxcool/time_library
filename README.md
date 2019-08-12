# time_library
A new view of the past

# Android Repo.
https://github.com/MasoomBadi/time_library_android/tree/master

I would like your help to create an app/program/webpage where a user of the app can note down and create their own library of history. 

The idea is that this can be used for any type of historical data. 
For example:
- human civilization events
- evolution of life on earth
- last two years of political events
- your personal life
- The growth of your company
- etc.

The library will be operated through a number of elements which can all interact and contain their own descriptions. Some elements will need the possibility to be nested in another.

The elements are:
- events
    * they can be nested in one another (for example 'D-day' into 'WWII', and 'WWII' into 'post 1900', or whatever)
    * any parent event can be visualized into a timeline
    * they can happen:
     - over a period of time (e.g. '1810-1845'; '2/2/2011 - 2/3/2011'; '16:10 23/8/1998 - 16:15 23/8/1998')
     - at a specific moment (e.g. '316 AD'; '6/8/2001', etc.)
- groups (such as political parties or organisations; e.g. 'the crusaders', 'the green party' etc.)
    * they can be nested in one another (e.g. 'Schutzstaffel' into 'NSDAP', or 'T-rex' into 'Dinosaurs')
- persons
    * they can be tagged in events
    * they can not be nested in one another
    * they can be nested within groups (generally, or for a specified time)
    * people can be related to one another (e.g. 'Otto Frank -> daughter: Anne Frank')
- locations
    * locations can be nested in other locations (e.g. Tokio in Japan, and Japan in Asia)
    * locations can change into another location over time (such as mesopotamia changed into the persian empire etc.)
- evidence
    * these are photo's, scans or PDFs of people, objects, historical documents and studies that can be linked to any of the above mentioned elements

All elements, except pieces of evidence, can be viewed in their own timeline, in which the tagged child-events will be visualized:
- events
  * for example, the parent event being "renaissance", the child-events being things that happened during this period
- groups
- persons: 
  * their date of birth and death can be added (both should be optional and not mandatory, in case of unknown or still alive)
- locations

Challenges:
- Timespan flexibility: events could have happened anywhere from billions of years ago until now, so to speak. In addition, early after the year 0, the yearly counting is a bit vague and sometimes whole years have been skipped. So the general timestamps and date formats may not be usefull. This issue needs to be addressed in order for the progam to be useful for any type of historical data, the most important part being able to go back in time before the year 0.
- It should be possible to view selected timelines alongside each other in order to be able to relate one element to another (e.g. what was happening in China when J.F.K. got shot)
- It should be possible for events to have vague beginnings and ends (this is especially important for events that happened a long time ago)

Other ideas:
- Along the course of history, and around different areas, different calendar types may have been or still be used, it would be nice if the user could switch to different calendar types (e.g. the islamic calendar)
- It would be nice if the user could visualize relations between people in interactive family trees
