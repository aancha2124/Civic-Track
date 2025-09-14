import './TrackIssues.css';

function TrackIssues() {
  // Mock data to simulate reported issues.
  // In a real application, you would fetch this data from a backend.
  const mockIssues = [
    {
      id: 1,
      title: 'Pothole on Main Street',
      description: 'There is a large pothole near the intersection of Main Street and Elm Avenue. It is causing a traffic hazard.',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Broken Streetlight at Park Entrance',
      description: 'The streetlight at the entrance to City Park has been out for three days, making the area very dark at night.',
      status: 'Submitted',
    },
    {
      id: 3,
      title: 'Water Leak on Oak Avenue',
      description: 'A pipe burst on Oak Avenue, and water has been leaking onto the road since this morning.',
      status: 'Resolved',
    },
    {
      id: 4,
      title: 'Overflowing Garbage Bin',
      description: 'The public garbage bin in the town square is completely overflowing and attracting pests.',
      status: 'Submitted',
    },
  ];

  return (
    <div className="page-container">
      <h2>Track Your Issues</h2>
      <p>Here you can see the status of all the issues you have reported.</p>
      
      <ul className="issue-list">
        {mockIssues.map(issue => (
          <li key={issue.id} className="issue-item">
            <div className="issue-header">
              <h3>{issue.title}</h3>
              <span className={`issue-status status-${issue.status.toLowerCase().replace(/\s/g, '-')}`}>
                {issue.status}
              </span>
            </div>
            <p className="issue-description">{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackIssues;