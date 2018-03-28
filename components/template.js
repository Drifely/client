<ScrollView>
<View style={styles.container}>
  <Text>Gyro</Text>
  <Gyro></Gyro>
  <Text>GEOLOC BG</Text>
  <BgGeo></BgGeo>
</View>
</ScrollView>


else {
 // let R = 6371
 // let lat1  = this.state.prevLat.toRad()
 // let lat2  = location.latitude.toRad()
 // let dLat  = (location.latitude - this.state.prevLat).toRad()
 // let dLong = (location.longitude - this.state.prevLong).toRad()
 // let a     = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
 // let c     = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
 // let distance = R * c
}

if (!this.state.longitude || !this.state.latitude) {
  this.setState({
    prevLat: location.latitude,
    prevLong: location.longitude,
    latitude: location.latitude,
    longitude: location.longitude,
    speed: location.speed,
    prevTime: location.time,
    time: location.time
  })
}