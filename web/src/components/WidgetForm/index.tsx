import { CloseButton } from "../CloseButton";

import bugImgUrl from '../../assets/bug.svg';
import ideaImgUrl from '../../assets/idea.svg';
import troughtImgUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG:{
        title: "Problema",
        image: {
            source: bugImgUrl,
            alt: 'imagem de um inseto (bug)'
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImgUrl,
            alt: "imagem de uma lampada (ideia)"
        },
    },

    OTHER: {
        title: "Outro",
        image: {
            source: troughtImgUrl,
            alt: "imagem de um balão de pensamento"
        },
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )
            }

            <footer>
            Feito com ♥ pela <a className="underline underline-offset-2 " href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}