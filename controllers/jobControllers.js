
const createJob = async (req, res) => {
    res.send("create job")
}

const deleteJob = async (req, res) => {
    res.send("delete job")
}

const getAllJobs = async (req, res) => {
    res.send("Get all jobs")
}

const updateJob = async (req, res) => {
    res.send("update job")
}

const showStats = async (req, res) => {
    res.send("Show stats")
}

export  {createJob, deleteJob, updateJob, getAllJobs, showStats}