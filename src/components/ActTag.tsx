interface ActTagProps {
  removeAct: (act: any, actType: string) => void
  act: any
  actType: string
}

function ActTag({ removeAct, act, actType}: ActTagProps): JSX.Element {
  return (
    <div className="border border-blue m-1 rounded-lg p-4 flex flex-col relative">
      {act}
      <button className='absolute text-red-600 top-0 right-0' type="button" onClick={() => removeAct(act, actType)}>
        X
      </button>
    </div>
  )
}

export default ActTag