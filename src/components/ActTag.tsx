interface ActTagProps {
  removeAct: (act: any) => void
  act: any
}

function ActTag({ removeAct, act}: ActTagProps): JSX.Element {
  return (
    <div className="border border-blue m-1 rounded-lg p-4 flex flex-col relative">
      {act}
      <button className='absolute text-red-600 top-0 right-0' type="button" onClick={() => removeAct(act)}>
        X
      </button>
    </div>
  )
}

export default ActTag