const q_images = {
	q1: {
		img:"1.png",
		alt: "A blob looking nervously at their phone."
		},
	q2: {
		img:"2.png",
		alt: "A blob staring at a pile of dirty clothes."
		},
	q3: {
		img:"3.png",
		alt: "A blob listening to music through earbuds."
		},
	q4: {
		img:"4.png",
		alt: "An illustration of a river running through a park."
		},
	q5: {
		img:"5.png",
		alt: "A blob and dog wearing matching sweaters."
		},
	q6: {
		img:"6.png",
		alt: "A blob sweating profusely."
		},
	q7: {
		img:"7.png",
		alt: "A drawing of a clock app screen."
		},
	q8: {
		img:"8.png",
		alt: "Drawings of a blob posing for photos."
		},
	q9: {
		img:"9.png",
		alt: "A drawing of a video website where the search bar says '4 DATES WHY' and the videos displayed are 'Music to deter raccoons', 'Rating viral recipes with my chef dad', and 'My 5 to 9 before and after my 9 to 5'."
		},
	q10: {
		img:"10.png",
		alt: "A very loose drawing of a mouse."
		},
	q11: {
		img:"11.png",
		alt: "A blob thinking about love."
		},
	q12: {
		img:"12.png",
		alt: "A bear-shaped honey bottle with hearts coming out of its head."
		},
	q13: {
		img:"13.png",
		alt: "A cartoon blue flower sitting at a table with lunch food."
		},
	q14: {
		img:"14.png",
		alt: "A blob that seems confused about love."
		},
	q15: {
		img:"15.png",
		alt: "Someone about to write a new message on their phone."
		},
	q16: {
		img:"16.png",
		alt: "A cartoon phone about to send a message saying 'sup'."
		},
	q17: {
		img:"17.png",
		alt: "A blob looking in the mirror."
		},
	q18: {
		img:"18.png",
		alt: "A smiling blob."
		},
	q19: {
		img:"19.png",
		alt: "A smiling blob."
		},
	q20: {
		img:"20.png",
		alt: "A blob with an uncertain expression."
		},
	q21: {
		img:"21.png",
		alt: "A blob thinking about what's in their heart and head."
	},
	q22: {
		img:"22.png",
		alt: "A blob in bed staring at the ceiling."
	}
};

const q_descriptions = {
q1: "You could barely sleep last night. You went on a fourth date a few days ago and \
sense a rejection text coming any moment now.<br/><br/>\
They've finally texted you back. You hold your breath.<br/><br/>\
<i>\"Yay I'm glad the concert was fun!\"<br/>\
\"Also I've been thinking about this and...\"<br/><br/></i>\
You hadn't even saved this number yet but you'd started thinking about the memories ahead. \
Why did you let yourself hope? This hurts. Still, you pull yourself together and text back promptly, ending your reply with:",
q2: "You won't let this stop your morning run. \
One problem: today is a long overdue laundry day. You're out of clean clothes. What do you wear?",
q3: "It's like, what, 7:15AM? Who could you possibly see at this time?<br/><br/>\
You listen to the same song on repeat and let it carry you through the miles. The act of running right now feels like you're:",
q4: "You pass the park where you first met fourth-date-person. \
You wonder what you could've done differently. Was it something you said? Maybe you:",
q5: "That was a long run!! Your weeks-unwashed clothes are soaked. \
As you air out your armpits, you see someone walking in your direction. \
They're wearing a shirt for your favorite football team and so is the dog they're walking. Are they looking at you? <br/><br/>\
Is this...the moment you've been waiting for?<br/><br/>\
The stranger looks at you again and you instinctively look away. Ahhh!! Why now?!<br/><br/>\
They're walking past you. What now?",
q6: {
	1: "You look up, but they keep on walking.",
	2: "<i>\"I hope so!\"</i><br/><br/>\
The two of you learn you're from the same hometown.<br/><br/> \
	<i>\"I'm Ev by the way! It's great to meet you.\"</i> You exchange numbers.",
	3: "<i>\"Woof!\"</i> you exclaim in the vague direction of the dog. \
	The person and dog keep on walking without acknowledging you woofed. \
	Not sure if they knew that was a greeting.",
	4: "You're really getting your cardio in!"
},
q7: "You shower and start your laundry. \
You set a timer \
and notice it's 2 AM right now in a city you've never been to. <br/><br/>\
Fourth-date-person went on a work trip a couple weeks ago. \
You'd added the city to your World Clock to know what time it was there. \
It sounded like a hectic trip and you appreciated that they texted you every day anyway. \
Based on the timestamps, they probably texted you back right before bed and first thing in the morning. \
Did it mean they really liked you? Did it mean nothing to them? It was endearing in any case.<br/><br/>\
You wonder how they felt when you texted them. Was it exciting? Comforting? Meaningless? Nightmare fuel?<br/><br/>\
Anyway. It's over now, and you're not going to be on that continent any time soon. You:",
q8: "You'll find love. \
You just need to put yourself out there! \
And you may as well refresh your dating profile while this motivation is around.<br/><br/>\
Actually...maybe let's just start with a single photo. What photo is flattering but not overly flattering? You end up going with:",
q9: "You update the photo and then swipe aimlessly. \
Maybe you don't know what you want. Or maybe you want the wrong things? Are you...the problem?<br/><br/>\
You open your laptop and your photos app sends you a notification. <i>You have a new memory.</i> \
It's your ex and your friends at the same park where you first met fourth-date-person. \
Okay! Let's take our mind elsewhere. <br/><br/>\
Your video recommendations have gradually been shifting toward dating advice. \
You're not sure what this is doing to your psyche. The video drawing you in today is:",
q10: "You watch the video on 2x speed and now your laundry is done! \
While emptying the dryer lint trap, you find a ball of fluff that looks like a mouse. \
Your ex would've loved this. You have no idea if fourth-date-person would.",
q11: {
	1: "It really is, isn't it? Life is so good.",
	2: "You send your ex a photo of the mouse fluff ball. They respond immediately. \
	<i>\"A MOUSE!!! This is the best dryer lint animal I've seen all year.\"</i> You smile and move on with your day.",
	3: "If you don't have a romantic interest to share this with, at least you have your entire social network. \
	You upload a photo of the lint ball. <br/><br/>\
	Minutes later, someone replies to your story. It's Amb, a friend's friend's friend who you met at a party months ago. \
	Amb later asked your friend if you were single. This was flattering, but Amb lived a 5-hour flight away. \
	But maybe you're too picky and need to be more open-minded?<br/><br/>\
	<i>\"Hey! Neat photo. What is it though? Hey so I moved to the city last month. Would love to hang out!\"</i><br/><br/>\
	Is this...the second chance you're looking for?",
	4: "Wow, that's very proactive of you! Good thing you know what you're doing, right?<br/><br/>\
	You can't figure it out despite your best efforts. \
	Now you're running late to meet up with your friend and you have to reassemble the dryer at some point. \
	But at least your clothes are clean and dry for now!"
},
q12: "You cross a street that shares its name with fourth-date-person. Was that street always there?<br/><br/>\
Someone's wearing a jersey for your favorite team. You're reminded of morning run stranger and their dog. Is this a sign?<br/><br/>\
You order a coffee. Pouring in milk at the counter, you lock eyes with a bear-shaped honey bottle. \
The bear stares at you, offering you the world.<br/><br/>\
Is this...the love of your life?",
q13: "You start dreaming of your sweet, sweet future with Honey Bear. \
Before you get to the part where you do a surprise proposal, your friend taps your shoulder and greets you.<br/><br/>\
Your friend asks how dating has been going. It's been going! And it's been scary. Right now, the biggest fear is:",
q14: "Your friend tells you, earnestly and lovingly, after hearing you met the last person through a dating app, \
that you should try meeting people 'in real life' instead.<br/><br/>\
Your friend pauses. <i>\"I just remembered. I have this friend, Plonk, who wants to get set up. I'm not sure if it's a romantic fit, \
but I'll throw you two into a group chat if you're open to it?\"</i> You are, in fact, open to it.<br/><br/>\
Is this...the start of the rest of your life?",
q15: "You're still riding the momentum of 'putting yourself out there' \
and decide to ask someone to get dinner before your confidence fades.<br/><br/>\
Hey. Why did fourth-date-person change the topic so quickly when you said you've been feeling alone in the world lately?<br/><br/>\
Back to your phone. Who do you message?",
q16: "And what do you say?",
q17: "They respond enthusiastically. You decide on a place you've been meaning to check out. \
Great! That's a win no matter how dinner goes.<br/><br/>\
You get ready for the maybe-date (can't be too sure about these things). \
You look in the mirror. \
You're more self-conscious than you were a few months ago. You change shirts thrice.<br/><br/>\
Dinner awaits!",
q18: {
	ev: "<i>\"So what got you into running?\"</i>",
	amb: "<i>\"Amb is short for Amorphous Blob.\"</i>",
	plonk: "<i>\"So nice to meet you! How has your experience with dating in the city been?\"</i>"	
},
q19: {
	ev: "<i>\"I do follow football pretty closely, but we don't have to talk about it. I'm sure you know way more than me and I don't want to bore you!\"</i>",
	amb: "<i>\"I moved here for work.\"</i>",
	plonk: "<i>\"So where do you see yourself settling down in 10 years? Geographically.\"</i>"	
},
q20: {
	ev: "<i>\"I recently reflected on what my favorite color is and I think it's changed from orange to purple.\"</i>",
	amb: "<i>\"My life is basically work and gym. But I'm just so competitive about both. If I'm not constantly improving, I get frustrated. I wish I could be more chill.\"</i>",
	plonk: "<i>\"If you could travel anywhere in the world, where would it be?\"</i>"	
},
q21: "Finally, you return home. How did you feel about dinner?",
q22: "Big day! You're proud of yourself for getting through it. One step at a time.<br/><br/>\
Fourth-date-person hasn't texted you. Of course they haven't. \
But you've been through this before, and you know it will hurt, but you also know this will pass. \
It feels contradictory, but you have this sinking feeling that everything will be okay.<br/><br/>\
This thought brings you comfort before you sleep:"
}; 
const q_choices = {
	q1: {
		choice0: {
			text: "Hope you find what you're looking for!",
			ra: -1,
			ri: 0,
			sn: -1
		},
		choice1: {
			text: "Sg!",
			ra: -1,
			ri: 0,
			sn: 1
		},
		choice2: {
			text: "Hope you have a great time on your backpacking trip next weekend and your mom's peonies thrive this spring!",
			ra: 1,
			ri: 0,
			sn: -1
		},
		choice3: {
			text: "And happy new year! (It's October)",
			ra: 1,
			ri: 0,
			sn: 1
		}
	},
	q2: {
		choice0: {
			text: "Something you haven't washed in weeks",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q3: {
		choice0: {
			text: "Manually processing your feelings.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice1: {
			text: "Literally running away from your problems.",
			ra: 0,
			ri: -1,
			sn: 1
		},
		choice2: {
			text: "Turning your thoughts off.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "Delusional. Why did you think you would enjoy running?",
			ra: 0,
			ri: 1,
			sn: -1
		}
	},
	q4: {
		choice0: {
			text: "Talked way too much about football.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice1: {
			text: "Overshared about your fears.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice2: {
			text: "Made jokes that didn't land the right way.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice3: {
			text: "Came off pretentious when talking about your recent health kick.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice4: {
			text: "Didn't elaborate when asked about where you grew up.",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice5: {
			text: "Laughed too loud.",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice6: {
			text: "Laughed too quietly.",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice7: {
			text: "Laughed??",
			ra: -1,
			ri: 0,
			sn: 0
		}
	},
	q5: {
		choice0: {
			id: 1,
			text: "Look toward them and see if they say anything",
			ra: -1,
			ri: 0,
			sn: -1
		},
		choice1: {
			id: 2,
			text: "\"Is this the year?\"",
			ra: 1,
			ri: 0,
			sn: -1,
			ev: true
		},
		choice2: {
			id: 3,
			text: "\"Woof!\"",
			ra: 1,
			ri: 0,
			sn: 1
		},
		choice3: {
			id: 4,
			text: "Start running",
			ra: -1,
			ri: 0,
			sn: 1
		}
	},
	q6: {
		choice0: {
			text: "Head back home",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q7: {
		choice0: {
			text: "Delete the city",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice1: {
			text: "Keep the city. This is the souvenir for your four dates",
			ra: 0,
			ri: 1,
			sn: 0
		}
	},
	q8: {
		choice0: {
			text: "Some photo your friends agree is good.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice1: {
			text: "A picture you like but haven't asked for feedback on yet.",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "An action shot of you playing an obscure board game.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice3: {
			text: "A selfie you take in this very moment.",
			ra: 0,
			ri: 1,
			sn: 0
		}
	},
	q9: {
		choice0: {
			text: "NO MORE SITUATIONSHIPS! 10 Rules To Change Your Life",
			ra: -1,
			ri: 1,
			sn: 0
		},
		choice1: {
			text: "CHEMISTRY or COMPATIBILITY? How do you tell the difference? (Powerful Mindset Shift)",
			ra: -1,
			ri: -1,
			sn: 0
		},
		choice2: {
			text: "I'm just not into them. What do I do? Can the feeling change?",
			ra: 1,
			ri: 1,
			sn: 0
		},
		choice3: {
			text: "Do THIS to make them want you. 5 SUBTLE TIPS",
			ra: 1,
			ri: -1,
			sn: 0
		}
	},
	q10: {
		choice0: {
			id: 1,
			text: "Cute!",
			ra: -1,
			ri: 1,
			sn: 0
		},
		choice1: {
			id: 2,
			text: "Message your ex",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice2: {
			id: 3,
			text: "Take a photo and upload it to your story",
			ra: -1,
			ri: 0,
			sn: 0,
			amb: true
		},
		choice3: {
			id: 4,
			text: "Dismantle the dryer to figure out how this happened",
			ra: 1,
			ri: 0,
			sn: 0
		}
	},
	q11: {
		choice0: {
			text: "Head to the cafe for lunch",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q12: {
		choice0: {
			text: "Yes",
			ra: 0,
			ri: 0,
			sn: 1
		},
		choice1: {
			text: "No",
			ra: 0,
			ri: 0,
			sn: -1
		}
	},
	q13: {
		choice0: {
			text: "How out of your control this process feels.",
			ra: 0,
			ri: 1,
			sn: -1
		},
		choice1: {
			text: "What's wrong with you.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "How much time and energy this is taking from your life.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "Not trusting your judgment and self-awareness.",
			ra: 0,
			ri: -1,
			sn: 1
		}
	},
	q14: {
		choice0: {
			text: "Nice to meet you, Plonk!",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q15: {
		choice0: {
			text: "Ev",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice1: {
			text: "Amb",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice2: {
			text: "Plonk",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q16: {
		choice0: {
			text: "Would you like to get dinner tonight? No worries if not!!! Sorry this is so last minute!!",
			ra: -1,
			ri: 0,
			sn: 1
		},
		choice1: {
			text: "Hey are you free for dinner tonight? Any time after 6 works for me. What time works best for you? Do you have any places you've been meaning to try? If not I have a list! ",
			ra: 1,
			ri: 0,
			sn: 1
		},
		choice2: {
			text: "din at 6 ?",
			ra: -1,
			ri: 0,
			sn: -1
		},
		choice3: {
			text: "Hey! Will you marry me? But before that, dinner?",
			ra: 1,
			ri: 0,
			sn: -1
		}
	},
	q17: {
		choice0: {
			text: "Prepare to talk about how long you've lived in the city for",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q18: {
		ev: {
			choice0: {
				text: "I'm training for an upcoming race.",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "One day I just ran and liked it. Do you run?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Let's return to the very start. Legend has it that my first steps as a baby were running ones. My first memory is of...",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		amb: {
			choice0: {
				text: "Wow!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Say more",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Tell me about your relationship with your family",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		plonk: {
			choice0: {
				text: "Okay, I guess...so how long have you lived in the city for?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "So today I woke up to a text...",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Want to see my 50-slide deck about this?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		}
	},
	q19: {
		ev: {
			choice0: {
				text: "I'm sure you know a lot!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Tell me absolutely everything",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Actually yeah. Can we talk about something else?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		amb: {
			choice0: {
				text: "Same!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "What do you do for work?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "What went into the decision to make the move?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		plonk: {
			choice0: {
				text: "I'm not sure.",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "I have some idea but I continually revisit this. How I think about it is...",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Wherever you are?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		}
	},
	q20: {
		ev: {
			choice0: {
				text: "Great!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "What prompted this reflection?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Walk me through the entire journey and how each color feels.",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		amb: {
			choice0: {
				text: "I totally feel that!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "I can see how that's frustrating. What do you want to get out of being 'more chill'?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Oh!",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		plonk: {
			choice0: {
				text: "Nothing immediate comes to mind. You?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Home, probably.",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Do I have unlimited time and money? Who's going with me?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		}
	},
	q21: {
		choice0: {
			text: "You knew, seconds into dinner, how you felt.",
			ra: 0,
			ri: 1,
			sn: -1
		},
		choice1: {
			text: "You're not sure. You have a gut feeling, but how are you supposed to trust that? You barely know this person.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "You need to run this date against your holistic date checklist to know.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "There's no way to know right now. It will take a while to figure out how you feel, if the other person is up for it.",
			ra: 0,
			ri: -1,
			sn: 1
		}
	},
	q22: {
		choice0: {
			text: "I'll look back on this time of my life fondly.",
			ra: -1,
			ri: 1,
			sn: 0
		},
		choice1: {
			text: "The possibilities make life more exciting.",
			ra: 1,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "Even if nothing ever works out, at least I'll know I tried.",
			ra: -1,
			ri: -1,
			sn: 0
		},
		choice3: {
			text: "This is plot progression.",
			ra: 1,
			ri: -1,
			sn: 0
		}
	}
};

const result_profiles = {
	rrs: {
		when: "you feel at peace",
		name: "Blue Flower",
		img: "blueflower.png",
		alt: "A cartoon blue flower",
		attr1: "Uses the same mug every day",
		attr2: "Talks about their interests using a ton of jargon without realizing it",
		attr3: "Fine with doing a year of long distance one week into making it official",
		how: "You and someone else in a friend's wedding party are from the same hometown and now live in the same neighborhood. Coincidence or fate? 💘",
		miss: "You hit it off with someone before boarding your flight but they live on a different continent. You figure this doesn't make logistical sense and don't exchange any contact info 😢"
	},
	rrn: {
		when: "they make you laugh",
		name: "Orange Circle",
		img: "orangecircle.png",
		alt: "A cartoon orange circle",
		attr1: "Notices when the walls at work get painted a slightly lighter shade of white",
		attr2: "Doesn't order the thing on the menu if they don't know how to pronounce it",
		attr3: "Knows exactly what the internet would think about their current romantic situation",
		how: "Changing your dating app location while travelling actually works out 💘",
		miss: "You and a friend have mutual romantic interest in each other. Neither of you realizes it and then one of you moves away 😢"
	},
	ris: {
		when: "you want to talk about yourself",
		name: "Yellow Star",
		img: "yellowstar.png",
		alt: "A cartoon yellow star",
		attr1: "Formats spreadsheets so the text wraps",
		attr2: "So many subscriptions",
		attr3: "Their friends are like  'you've been dating this person for 2 years and this is the first I'm hearing of them??'",
		how: "You've known of this person for years but don't know them well. Finally, you end up in the same car as them for an hour long drive and you enjoy their company 💘",
		miss: "Your friend's friend shows interest but it feels too close to home 😢"
	},
	rin: {
		when: "you can't wait to tell them what happened today",
		name: "Pink Triangle",
		img: "pinktriangle.png",
		alt: "A cartoon pink triangle",
		attr1: "Camera roll overflowing with screenshots to send to friends",
		attr2: "Looks out at the rolling hills and thinks everything is going to be ok",
		attr3: "Gifts a croissant on the second date because they were just at a bakery but then feels bad for not checking for food allergies and says no pressure to actually eat this",
		how: "You're on a five-hour train ride and the person sitting next to you is reading the same book you're reading right now. You take your book out of your bag and start reading conspicuously. Eventually the other person notices and comments on this coincidence 💘",
		miss: "You meet someone at an event and exchange numbers. They don't text you and you think you may as well not initiate if they're not interested 😢"
	},
	ars: {
		when: "they get your jokes",
		name: "Purple Hexagon",
		img: "purplehexagon.png",
		alt: "A cartoon purple hexagon",
		attr1: "Great soup recipes with adjustable macros",
		attr2: "On principle, bed is either always made or never made",
		attr3: "After meeting someone and feeling excited about the connection, spends the evening asking why 100 times until an acceptable logical answer is found",
		how: "Someone DMs your hobby account. You meet up after a week of in-depth discussion about your shared interest 💘",
		miss: "Too busy solving a puzzle at the museum. You don't notice the person next to you, equally as focused but on a different puzzle 😢"		
	},
	arn: {
		when: "the world feels brighter",
		name: "Red Trapezoid",
		img: "redtrapezoid.png",
		alt: "A cartoon red trapezoid",
		attr1: "After-work plans with three different groups on a Tuesday (pre-dinner, dinner, post-dinner)",
		attr2: "Has the best finds when thrifting",
		attr3: "Can't stop themselves from asking 'what is this' early on",
		how: "Telling the person in front of you in line that you like their hair 💘",
		miss: "You get caught up in telling a story. You don't notice the stranger wearing the same shirt as you from a tour your favorite artist did 8 years ago 😢"
	},
	ais: {
		when: "the thoughts and ideas are endless",
		name: "Green Blob",
		img: "greenblob.png",
		alt: "A cartoon green blob",
		attr1: "Watches TV in the language they're trying to learn",
		attr2: "Forgets friend's birthday until the end of the day even though they planned the (very elaborate) birthday party",
		attr3: "Double texts without worrying about it",
		how: "Texting a phone number someone left in a library book 💘",
		miss: "Not meeting the love of your life at a cafe one fateful day. The day before, you committed to going caffeine-free 😢"
	},
	ain: {
		when: "you feel seen",
		name: "Brown Square",
		img: "brownsquare.png",
		alt: "A cartoon brown square",
		attr1: "Should wash their water bottle",
		attr2: "Too many keychains and not enough items to hang them on",
		attr3: "Can't commit to a favorite color but willing to jump into a relationship as soon as something feels promising",
		how: "Going on a hike with a friend's friends. One of them is especially attentive when you talk at length about your latest thoughts 💘",
		miss: "Not talking to the person you make eye contact with at the grocery store 3 times in the same visit 😢"
	}
}