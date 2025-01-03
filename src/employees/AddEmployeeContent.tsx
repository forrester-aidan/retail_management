import React from 'react'

interface Props {
  setFirstName: any
  setLastName: any
  setAge: any
  setJob: any
  setPermissions: any
}

const ComponentName: React.FC<Props> = ({
  setFirstName,
  setLastName,
  setAge,
  setJob,
  setPermissions,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <p>First Name</p>
      <input
        type="text"
        placeholder="Insert Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Last Name</p>
      <input
        type="text"
        placeholder="Insert Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Age</p>
      <input
        type="text"
        placeholder="Insert Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setAge(e.target.value)}
      />
      <p>Job</p>
      <input
        type="text"
        placeholder="Insert Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setJob(e.target.value)}
      />
      <p>Permissions</p>
      <input
        type="text"
        placeholder="Insert Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setPermissions(e.target.value)}
      />
    </div>
  )
}

export default ComponentName
