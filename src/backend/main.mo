import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import List "mo:core/List";

actor {
  public type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module Submission {
    public func compare(a : Submission, b : Submission) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      message;
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray().sort();
  };
};
