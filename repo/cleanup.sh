
function clean {
	for i in ${@} ; do
		if [[ ! "${@: -1}" == "$i" ]]; then
			echo "$i"
			rm "$i"
		fi
	done
}

clean $(ls arch/i3-gaps-tos* | sort)

clean $(ls arch/installer-backend* | sort)

clean $(ls arch/installer-gui* | sort)
clean $(ls arch/installer-cli* | sort)

clean $(ls arch/linux-tos-5* | sort)
clean $(ls arch/linux-tos-docs* | sort)
clean $(ls arch/linux-tos-headers* | sort)

clean $(ls arch/readme-generator-git* | sort)
clean $(ls arch/shunit-git* | sort)

clean $(ls arch/st-tos* | sort)
clean $(ls arch/visual-studio-code-insiders* | sort)
