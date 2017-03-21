# Study Group - GSoC

Welcome to the planning repository for the 2017 Study Group Google Summer of Code (GSOC) project!

If you're interested in contributing, you should find all of the details here. We've centralized it into this repository, because the Study Groups project is distributed accross multiple repositories, and we'd like to keep things tidy and focused for the duration of the mentorship. Issues and roadmap goals will reflect changes accross multiple repositories on Github, so you'll have the opportunity to contribute to multiple aspects of this project.

## Project Title
Study Group Activity Visualizations

## Project Description 

As seen on the [Mozilla GSOC wiki](https://wiki.mozilla.org/Community:SummerOfCode17#Project_List), this project is part of 3 proposed projects under the "Mozilla Science Lab." Ours is the third project on that list, and involves creating visualizations of our distributed Study Group community activity, and unifying data collected from our mulitiple Study Group repositories. 

For more background, the [Mozilla Science Lab](https://science.mozilla.org/) is a part of the Mozilla Foundation devoted to supporting a global community of scientists who want to open source their research and their learning materials. The Study Group program is a part of that initiative, and centers around a simple website that leverages Jekyll blog software and Github issues to enable the creation of a website for peer-learning groups. These groups collaborate and come together for in-person workshops and events that teach scientific programming concepts, open science practice, and scripting languages. Study Group Leads fork the [Study Group Website Repository](https://github.com/mozillascience/studyGroup) and customize the attached website (gh-page) to run meetups [all over the world](https://science.mozilla.org/programs/studygroups). They organize regular events, skill shares, co-work and create community around open science. 

Currently, we have several repositories for Study Group Resources, which we welcome you to review, see the table below. Assess the usability and user experience of each, and let us know what you think in the [issues here](https://github.com/mozillascience/studyGroup-GSOC/issues).

Resource | Description | Additional Links | Owner
-------- | ----------- | ---------------- | -----
[Study Group Website](http://mozillascience.github.io/studyGroup/) | main repository for Study Groups, Leads fork this repository to start their own study group and customize their website | [code](https://github.com/mozillascience/studyGroup) + [issues](https://github.com/mozillascience/studyGroup/issues)| [Aurelia](https://github.com/auremoser)
[Study Group Orientation Guide](https://mozillascience.github.io/study-group-orientation/index.html) | gitbook that explains how to start a study group and start planning events/workshops | [code](https://github.com/mozillascience/study-group-orientation) + [issues](https://github.com/mozillascience/study-group-orientation/issues) | [Zannah](https://github.com/zee-moz) 
[Study Group Lessons](https://github.com/mozillascience/studyGroupLessons) | submoduled lesson outlines for a variety of programming and open science topics | check out the [issues](https://github.com/mozillascience/studyGroupLessons/issues) for additional lesson suggestions or implementations of the "standard" repo lessons | [Aurelia](https://github.com/auremoser)
[Study Group Events Tracker](https://mzl.la/sg-events) | website for submitting events with more detailed metadata on attendees and topics | [code](https://github.com/mozillascience/studyGroupEvents) + [issues](https://github.com/mozillascience/studyGroupEvents/issues) | [Aurelia](https://github.com/auremoser)
[Study Group Events Crawler](https://github.com/auremoser/sg-events) | set of scripts for pulling events from the forked Study Group repositories and creation JSON for visualizations | [code](https://github.com/auremoser/sg-events/) + [issues](https://github.com/auremoser/sg-events/issues) | [Aurelia](https://github.com/auremoser)
[Mozilla Study Group Project](https://science.mozilla.org/programs/studygroups) | part of the Mozilla Science Lab website, where the study group project and map of Study Group locations is featured | | Mozilla Science Lab
[Gitter Chat](https://gitter.im/mozillascience/studyGroup) | community chat room for all study group related issues and activity around the world | | Mozilla Science Lab

## Problem Statement
Right now there's no easy way to see all the study group events, or to otherwise visualize Study Group project participation. We'd like to change that :smiley:.

* Check the [CONTRIBUTOR.md](CONTRIBUTOR.md) file to learn more about our objectives
* Read through our [ROADMAP.md](ROADMAP.md) for the broader goals for this project
* Review the [issues queue](https://github.com/mozillascience/studyGroup-GSOC/issues) for some specific ways to dive into development, or contribute your own

## Expected Outcomes

Ideally, we'd like to have the following outcomes, subject to applicant interest:

* a set of visualizations (maps/graphs/charts) that can be continuously and easily updated with stats on the Study Group Project (how many forks we have, what is the "activity" level or recent commit counts on those repos, how many `_posts` directory additions aka events have been made to those repos, how many members in the `config.yml` are logged, what features are being used and what features are being ignored)
* script(s) that would link our [Study Group Events](https://github.com/mozillascience/studyGroupEvents) site, currently populated by a manual-entry Google form, with events in the forked directory of all study groups; there's a starter set of scripts for this in the [sg-events](https://github.com/auremoser/sg-events) repository, but is currently just data and not yet a set of visualizations
* a comprehensive and easily updated report, or process for creating reports about what is working well in the Study Group repositories, what isn't being used, and what needs to change to solicit new contributors, and Study Group Leads.

## Preferred Skills
The Study Group project is primarily composed of Github infrastructure, Javascript, and occasionally Python. Contributors with Node and Javascript visualization skills are encouraged to apply!

All are welcome to contribute as the methods of contribution vary, review some of the [issues](https://github.com/mozillascience/studyGroup-GSOC/issues) and decide how to best apply your skills.

## Getting Started

Ready to start contributing to this GSOC project? AWESOME, thanks for reading this far. 

* Take a look at the existing Study Groups and map visualization on the [Mozilla Study Group Project Page](https://science.mozilla.org/programs/studygroups)
* Review the various repositories in the table above, under `Project Description`
* Consider the `Problem Statement` and `Outcomes` in this README
* Draft a proposal for your approach to solving some of these issues and achieving these outcomes
* Send your proposal to aurelia[at]mozillafoundation[dot]org
* You can expect followup on your proposal if chosen by the end of the GSOC proposal period, hopefully before!


## Mentors

Aurelia Moser, Community Lead, Mozilla Science Lab, [@auremoser](https://twitter.com/auremoser), aurelia[at]mozillafoundation[dot]org

## Glossary

* **Study Group** - Mozilla Study Groups are fun, informal meetups of your friends and colleagues from around your local institution or town to share skills, stories and ideas on using code for research, and explore open research practices. The goal is to create a friendly, no-pressure environment where people can share their work, ask for help on a coding problem, and learn and work together with their peers. Anyone can start a Study Group.
* **Study Group Lead** - someone who forks the Study Group website repo, and begins leading a study group in his/her local community, with collaborators or without.
* **"Events"** - study group leads organize "events" or informal in-person meetings via the `_posts` directory (like [this one](https://github.com/aure-test/studyGroup/blob/gh-pages/_posts/2017-01-20-rnoobs.markdown)) and the issues like ([this one](https://github.com/aure-test/studyGroup/issues/1)) in their forked [Study Group websites](https://github.com/mozillascience/studyGroup). There is a guide for this in the Study Group [README - how to setup your site](https://github.com/mozillascience/studyGroup#how-to-set-up-your-own-mozilla-study-group-website).
* **Fork** - to create a copy of a repository on your own github, this is how Study Groups propogate: Study Group Leads create a Github account and select the "fork" button on the [Study Group Website](http://mozillascience.github.io/studyGroup/) homepage to create their own study group and begin customizing their website, planning events and activities for their community.
* **Submodule** - on Github, a repository embedded in your main repository, you can read more about this process and why you might want to do it [here](https://gist.github.com/gitaarik/8735255), it's how the Study Group Lessons are logged in our Lessons repo.





