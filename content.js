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
		alt: "A drawing of a video website where the search bar says '4 DATES WHY' and the videos displayed are 'Relationship Talk: How did we know?', 'Trying 5000 ice cream flavors', 'My 5 to 9 before and after my 9 to 5', 'In my healing era', 'Music to deter raccoons', and 'Don't miss these 100 dating red flags'."
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
q1: "You slept poorly last night. You went on a fourth date a few days ago and \
sense a rejection coming any moment now.<br/><br/>\
You flip your phone over. They've finally texted you back.<br/><br/>\
<i>\"Yay I'm glad the concert was fun!\"<br/>\
\"Also I've been thinking about this and...\"<br/><br/></i>\
You hadn't even saved this number and yet you'd imagined the memories ahead. \
This is really too bad. Still, you text back promptly, ending your reply with:",
q2: "You won't let this stop your morning run. \
One problem: you're out of clean clothes. You'll have to look through your laundry pile. What do you do?",
q3: "It's like, what, 7:15AM? Who could you possibly see at this time?<br/><br/>\
You listen to the same song on repeat and let it carry you through the miles. Right now, you feel:",
q4: "You run through the park where you first met fourth-date-person. \
You wonder what you could've done differently. Was it something you said? Maybe it ended because:",
q5: "That was a long run!! Your clothes are soaked. \
As you air out your armpits, you see someone walking in your direction. \
They're wearing a shirt for your favorite football team and so is the dog they're walking. Are they looking at you? <br/><br/>\
Is this...the moment you've been waiting for?<br/><br/>\
The stranger looks at you again. What now?",
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
It sounded like a hectic trip. \
Based on the timestamps, they probably texted you right before bed and first thing in the morning. \
Did it mean they really liked you? Did it mean nothing to them? In any case, it was endearing.<br/><br/>\
Anyway. It's over now. You:",
q8: "You'll find love. \
You just need to put yourself out there! \
And you may as well refresh your dating profile while this motivation is around.<br/><br/>\
Actually...maybe let's just start with a single photo. You end up going with:",
q9: "You update the photo and then swipe aimlessly. What <i>do</i> you want? <br/><br/>\
You open your laptop and your photos app sends you a notification. <i>You have a new memory.</i> \
It's your ex and your friends at Fourth-date-person Park. \
...Okay! Let's take our mind elsewhere. <br/><br/>\
Your video recommendations have shifted toward dating advice. \
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
	But maybe you need to be more open-minded?<br/><br/>\
	<i>\"Hey! Neat photo. What is it though? Hey so I moved to the city last month. Would love to hang out!\"</i><br/><br/>\
	Is this...the second chance you're looking for?",
	4: "Wow, that's very proactive of you! Good thing you know what you're doing, right?<br/><br/>\
	You can't figure it out despite your best efforts. \
	Now you're running late to meet up with your friend and you have to reassemble the dryer at some point. \
	But at least your clothes are clean and dry for now!"
},
q12: "You cross a street that shares its name with fourth-date-person. Was that street always there?<br/><br/>\
Someone's wearing a jersey for your favorite team. You're reminded of the morning run stranger and their dog. Is this a sign?<br/><br/>\
You order a coffee. Pouring in milk at the counter, you lock eyes with a bear-shaped honey bottle. \
The bear stares at you, offering you the world.<br/><br/>\
Is this...the love of your life?",
q13: "You picture your sweet, sweet future with Honey Bear. \
Before you visualize your wedding dance, your friend taps your shoulder and greets you.<br/><br/>\
Your friend asks how dating has been going. It's been going! The hardest part right now is:",
q14: "Your friend tells you, earnestly and lovingly, after hearing you met the last person through a dating app, \
that you should try meeting people 'in real life' instead.<br/><br/>\
Your friend pauses. <i>\"I just remembered. I have this friend, Plonk, who wants to get set up. I'll throw you two into a group chat if you're open to it?\"</i> You are, in fact, open to it.<br/><br/>\
Is this...the start of the rest of your life?",
q15: "Still riding the momentum of 'putting yourself out there', \
you decide to ask someone to get dinner before your confidence fades.<br/><br/>\
Hey. Why did fourth-date-person change the topic so quickly when you talked about your interests?<br/><br/>\
Back to your phone. Who do you message?",
q16: "And what do you say?",
q17: "They respond enthusiastically. You decide on a place you've been meaning to check out. \
Great! That's a win no matter how dinner goes.<br/><br/>\
You get ready for the maybe-date. \
You look in the mirror and wonder how interesting you are. You change shirts thrice.<br/><br/>\
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
q22: "Big day!<br/><br/>\
Fourth-date-person hasn't texted you. Of course they haven't. \
But you've been through this before, and though it feels contradictory, you have this sinking feeling that everything will be okay.<br/><br/>\
This thought brings peace before you sleep:"
}; 
const q_choices = {
	q1: {
		choice0: {
			text: "I totally understand! (You don't)",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice1: {
			text: "Sg! (That's the whole text)",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice2: {
			text: "Hope your backpacking trip is great, your mom’s peonies thrive this spring, and your best friend’s husky chihuahua mix has the best birthday known to dog! (You already removed three other specific details)",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice3: {
			text: "And happy new year! (It's October)",
			ra: 1,
			ri: 0,
			sn: 0
		}
	},
	q2: {
		choice0: {
			text: "Pick up whatever running clothes are at the top of the pile.",
			ra: 0,
			ri: 0,
			sn: -1
		},
		choice1: {
			text: "Rummage through the entire pile to find your favorite running outfit.",
			ra: 0,
			ri: 0,
			sn: 1
		}
	},
	q3: {
		choice0: {
			text: "Peaceful. It’s so nice being out here.",
			ra: 0,
			ri: 1,
			sn: -1
		},
		choice1: {
			text: "Turbulent. Why are you literally running away from your problems?",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "Blank. You’re taking a break from your thoughts.",
			ra: 0,
			ri: -1,
			sn: 1
		},
		choice3: {
			text: "Good about yourself. It feels good to stick to your routine no matter what.",
			ra: 0,
			ri: -1,
			sn: -1
		}
	},
	q4: {
		choice0: {
			text: "You didn't say the right lines.",
			ra: 0,
			ri: 0,
			sn: 1
		},
		choice1: {
			text: "You overshared about your fears.",
			ra: 0,
			ri: 0,
			sn: 1
		},
		choice2: {
			text: "Your jokes kept flying past them.",
			ra: 0,
			ri: 0,
			sn: -1
		},
		choice3: {
			text: "They were intimidated by you.",
			ra: 0,
			ri: 0,
			sn: -1
		}
	},
	q5: {
		choice0: {
			id: 1,
			text: "Look toward them and see if they say anything.",
			ra: -1,
			ri: 0,
			sn: -1
		},
		choice1: {
			id: 2,
			text: "\"Nice matching shirts! Think we're making the playoffs this year?\"",
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
			text: "Start running again.",
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
			text: "Delete the city—no need to leave this around.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice1: {
			text: "Keep the city. Why not hold on to this memory?",
			ra: 0,
			ri: 1,
			sn: 0
		}
	},
	q8: {
		choice0: {
			text: "Some photo your friends all agree is good.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice1: {
			text: "A picture you like but no one else has given feedback on.",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "A photo that your friends universally agree is unflattering, but you like the photo.",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice3: {
			text: "A selfie you take in this very moment.",
			ra: 0,
			ri: -1,
			sn: 0
		}
	},
	q9: {
		choice0: {
			text: "CHEMISTRY or COMPATIBILITY? (Powerful Mindset Shift)",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice1: {
			text: "20 Married Couples Answer: How did we know they were “the one”?",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "Do THIS to make them want you. 5 SUBTLE TIPS",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice3: {
			text: "Get The Treatment You Deserve (You're DONE SETTLING!)",
			ra: 0,
			ri: -1,
			sn: 0
		}
	},
	q10: {
		choice0: {
			id: 1,
			text: "Cute!",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice1: {
			id: 2,
			text: "Message your ex",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice2: {
			id: 3,
			text: "Take a photo and upload it to your story",
			ra: 0,
			ri: 0,
			sn: 0,
			amb: true
		},
		choice3: {
			id: 4,
			text: "Dismantle the dryer to figure out how this happened",
			ra: 0,
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
			sn: -1,
			nohoneybear: true
		}
	},
	q13: {
		choice0: {
			text: "How out of your control this process feels.",
			ra: -1,
			ri: 1,
			sn: -1
		},
		choice1: {
			text: "How much you worry about what's wrong with you.",
			ra: -1,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "How much time this is taking from your life.",
			ra: 1,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "Constantly wondering how you can optimize and improve your approach to dating.",
			ra: 1,
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
			text: "Are you free for dinner tonight? Do you have any places you've been meaning to try? If not I have a list!",
			ra: 1,
			ri: 0,
			sn: -1
		},
		choice2: {
			text: "Din at 6?",
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
				text: "It's been fine. So how long have you lived in the city for?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "I don't know! It has its ups and downs.",
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
				text: "Tell me absolutely everything.",
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
				text: "Walk me through your entire decision making process for this move.",
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
				text: "I have a few potential paths in mind. The first one is...",
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
				text: "Good question! Let me think...",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Do I have unlimited time and money? Who's going with me? What do you mean by anywhere?",
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
			text: "You're not totally sure, but you have an initial gut feeling.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "You need to evaluate this date against your checklist to know.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "How would you know after one date?",
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
			text: "Life is more exciting this way.",
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
			text: "It just takes one.",
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
		miss: "You hit it off with someone before boarding your flight but they live on a different continent. You figure this doesn't make logistical sense and don't exchange any contact info 😢",
		opposite: "Brown Square",
		oppositeimg: "brownsquare.png"
	},
	rrn: {
		when: "they make you laugh",
		name: "Orange Circle",
		img: "orangecircle.png",
		alt: "A cartoon orange circle",
		attr1: "Notices when the walls get painted a slightly lighter shade of white",
		attr2: "Doesn't order the thing on the menu if they don't know how to pronounce it",
		attr3: "Knows exactly what the internet would think about their current romantic situation",
		how: "Changing your dating app location while travelling actually works out 💘",
		miss: "You and a friend have mutual romantic interest in each other. Neither of you realizes it and then one of you moves away 😢",
		opposite: "Green Blob",
		oppositeimg: "greenblob.png"
	},
	ris: {
		when: "you want to talk about yourself",
		name: "Yellow Star",
		img: "yellowstar.png",
		alt: "A cartoon yellow star",
		attr1: "Formats spreadsheets so the text wraps",
		attr2: "So many subscriptions",
		attr3: "Their friends are like  'you've been dating this person for 2 years and this is the first I'm hearing of them??'",
		how: "You've known of this person for years but don't know them well. Finally, you both end up in the same car for a long drive and enjoy each other's company 💘",
		miss: "Your friend's friend shows interest but it feels too close to home 😢",
		opposite: "Red Trapezoid",
		oppositeimg: "redtrapezoid.png"
	},
	rin: {
		when: "you can't wait to tell them what happened today",
		name: "Pink Triangle",
		img: "pinktriangle.png",
		alt: "A cartoon pink triangle",
		attr1: "Camera roll overflowing with screenshots to send to friends",
		attr2: "Looks out at the rolling hills and thinks everything is going to be ok",
		attr3: "Gifts a croissant on the second date but feels bad for not checking for food allergies and says no pressure to actually eat this",
		how: "The person next to you on the train is reading the same book you're reading right now. You take your copy out and read conspicuously. They notice and comment on this coincidence 💘",
		miss: "You meet someone at an event. They don't text you and you think you may as well not initiate if they're not interested 😢",
		opposite: "Purple Hexagon",
		oppositeimg: "purplehexagon.png"
	},
	ars: {
		when: "they get your jokes",
		name: "Purple Hexagon",
		img: "purplehexagon.png",
		alt: "A cartoon purple hexagon",
		attr1: "Great soup recipes with adjustable macros",
		attr2: "On principle, bed is either always made or never made",
		attr3: "After meeting someone and feeling excited about the connection, spends the evening asking why 100 times until an acceptable logical answer is found",
		how: "Someone DMs your hobby account. You meet up after a week of discussion about your shared interest 💘",
		miss: "So relieved after solving a puzzle at the museum with a stranger that you don't stay longer to talk to them 😢",
		opposite: "Pink Triangle",
		oppositeimg: "pinktriangle.png"
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
		miss: "You get caught up in telling a story. You don't notice the stranger wearing the same shirt as you from a tour your favorite artist did 8 years ago 😢",
		opposite: "Yellow Star",
		oppositeimg: "yellowstar.png"
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
		miss: "Not meeting the love of your life at a cafe one fateful day. The day before, you committed to going caffeine-free 😢",
		opposite: "Orange Circle",
		oppositeimg: "orangecircle.png"
	},
	ain: {
		when: "you feel seen",
		name: "Brown Square",
		img: "brownsquare.png",
		alt: "A cartoon brown square",
		attr1: "Should wash their water bottle",
		attr2: "Too many keychains, not enough items to hang them on",
		attr3: "Can't commit to a favorite color but willing to jump into a relationship as soon as something feels promising",
		how: "Going on a hike with a friend's friends. One of them is especially attentive when you talk at length about your latest thoughts 💘",
		miss: "Not talking to the person you make eye contact with at the grocery store 3 times in the same visit 😢",
		opposite: "Blue Flower",
		oppositeimg: "blueflower.png"
	}
}