function skillsMember(member) {
  this.name = member.name;
  this.email = member.email;
  this.phone = member.phone;
  this.skills = member.skills || [];
}