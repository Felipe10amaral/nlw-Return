import {feedbackTypes, FeedbackType} from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged : (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps){
    return(
        <>
            <header className="text-xl leading-6">
                <span>Deixe seu feedback</span>
                <CloseButton />
            </header>
        
            <div className="flex gap-2 py-8 w-full">
                {
                Object.entries(feedbackTypes).map(([key, value]) => {
                        return(
                            <>
                                <button
                                    key={key}
                                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 gap-2 focus:border-brand-500 focus:outline-none"
                                    type="button"
                                    onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                                >
                                    <img src={value.image.source} alt={value.image.alt}></img>
                                    <span>{value.title}</span>
                                </button>
                            </>
                        )
                })}
            </div>    
        </>
    )
}