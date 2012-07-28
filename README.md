jQuery LimitText Plugin
===

Simple plugin to limit the value of a textarea or text input updating at the same time a counter.

	$('#message').limitText({
  		limit: 160,
   	 	counterSelector: "#counter"
	}); 

Options
---
* **counterSelector**: the key to access to the counter container
* **limit**: max length of the text
* **warningLevel**: threshold triggering limittext-warning event

Features
---

* it supports 'reset' of the form containing the target textarea/text input
* it triggers event:
  * limittext-limit: when the limit is reached
  * limittext-warning: when the warning threshold is reached
  * limittext-ok: when everything is going just fine (to reset things)