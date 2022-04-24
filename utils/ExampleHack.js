(async () => {
			try
			{
				let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
				hack.stateNode.state.gold = prompt("How much gold would you like?")
			}
			catch (hack)
			{
				if (confirm('An error has occured, would you like report this on the Github?'))
				{
					window.open("https://github.com/ZasticBradyn/Blooket-Hacks/issues/new")
				};
			};

			function selfpromo()
			{
				alert("Coded by zastix")
			}
			selfpromo()
		}
	}
})();
