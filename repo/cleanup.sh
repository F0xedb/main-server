#!/bin/bash

# takes a x arguments and will delete all of them except for the last argument.
# This function is used to cleanup files to keep only the latest version alive
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
clean $(ls arch/installer-3* | sort)

clean $(ls arch/linux-tos-5* | sort -t "-" -k3.10)
clean $(ls arch/linux-tos-docs* | sort -t "-" -k4.10)
clean $(ls arch/linux-tos-headers* | sort -t "-" -k4.10)

clean $(ls arch/readme-generator-git* | sort)
clean $(ls arch/shunit-git* | sort)

clean $(ls arch/st-tos* | sort)
clean $(ls arch/visual-studio-code-insiders* | sort)

clean $(ls arch/tos-tools* | sort)

clean $(ls arch/polybar-git-3.4.0.* | sort)
clean $(ls arch/mcmojave-circle-icon-theme-git-* | sort)

clean $(ls arch/tos-grub-theme-r* | sort)

clean $(ls arch/skel-* | sort)

clean $(ls arch/awesome-tos-* | sort)
clean $(ls arch/system-updater-* | sort)
clean $(ls arch/i3lock-color-git* | sort)
clean $(ls arch/motd-live* | sort)
