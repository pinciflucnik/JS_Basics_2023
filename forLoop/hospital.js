function hospital(arg){
    let daysCount = Number(arg[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    for (i = 1; i <= daysCount; i++){
        let patients = Number(arg[i]);
        if (i % 3 == 0 && untreatedPatients > treatedPatients){
            doctors++;
        }
            if (doctors >= patients){
            treatedPatients = treatedPatients + patients;
            }
            else{
            untreatedPatients = untreatedPatients + (patients - doctors);
            treatedPatients = treatedPatients + doctors;
            }

        
        
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
hospital(["4","7","27","9","1"])