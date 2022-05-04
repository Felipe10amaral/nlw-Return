import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested}: FeedbackContentStepProps){
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return(
        <>
            <header className="text-xl leading-6 flex items-center gap-2">
                <button 
                    className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100' 
                    type="button"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight='bold' className='w-4 h-4'/>
                </button>
                
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                
                <span>{feedbackTypeInfo.title}</span>
                
                <CloseButton />
            </header>

            <form className='my-4 w-full'>
                <textarea 
                    placeholder='Conte com detalhes o que está acontecendo... '
                    className='min-w[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md'
                />

            </form>
        </>    
    )

}