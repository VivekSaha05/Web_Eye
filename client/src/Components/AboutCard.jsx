import React from "react";
function AboutCard(props) {
    return (
        <div class="w-full max-w-xs text-center">
            <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src={props.image} alt="avatar" />

            <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{props.name}</h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">{props.desc}</span>
            </div>
        </div>
    )
}
export default AboutCard;