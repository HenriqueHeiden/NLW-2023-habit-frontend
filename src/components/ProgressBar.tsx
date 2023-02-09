interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps){    
    return(
        <>
             <div className='h-3 rounded-x1 bg-zinc-700 w-full mt-4'>
                <div 
                    role="progressbar"
                    aria-label='Progresso de hábito completados nesse dia'
                    arial-aria-valuenow={props.progress}
                    className='h-3 rounded-x1 bg-violet-600' 
                    style={{width: `${props.progress}%`}}
                />
            </div>
        </>
    )
}