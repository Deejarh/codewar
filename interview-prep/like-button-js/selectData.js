const sessions = [
    { user: 8, duration: 50, equipment: ['bench'] },
    { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
    { user: 7, duration: 200, equipment: ['bike'] },
    { user: 2, duration: 200, equipment: ['treadmill'] },
    { user: 2, duration: 200, equipment: ['bike'] },
  ];

  function selectData(sessions, option ) {
   
    let result;
    if (option.user) {
        result = sessions.filter((session) => {
            return session.user === option.user

         })
    } else if ( option.minDuration){
         result = sessions.filter((session) => {
            return session.duration >=  option.minDuration
         })  
    } else if ( option.equipment){
        const equipments = option.equipment 
       
            result = sessions.filter((session) => {
                return equipments.some((value) =>  session.equipment.includes(value))
            })
    }



    if (option.merge) {
        const merged = {};
    
        // Iterate over the sessions and merge them by user
        result.forEach(session => {
          const { user, duration, equipment } = session;
    
          // If this is the first session for the user, initialize the merged object
          if (!merged[user]) {
            merged[user] = { ...session };
          } else {
            // Otherwise, merge the session with the existing one
            merged[user].duration += duration;
            merged[user].equipment = Array.from(
              new Set([...merged[user].equipment, ...equipment])
            ).sort(); // De-duplicate and sort equipment
          }
        });
    
        // Convert merged object back to array and preserve the order
        result = Object.values(merged).sort((a, b) => 
          sessions.findIndex(s => s.user === a.user) - sessions.findIndex(s => s.user === b.user)
        );
      }
    
    return result
  
  }

  console.log(selectData(sessions,  { equipment: ['bike', 'kettlebell'] } ))